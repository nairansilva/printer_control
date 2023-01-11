import { CreateTurmaDto } from './../turmas/dto/create-turma.dto';
import { UsersRepository } from './repositories/users.repository';
import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthService } from 'src/auth/auth.service';
import * as bcrypt from 'bcrypt';
import { LoginInterface } from './models/login.interface';

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UsersRepository,
    private readonly authService: AuthService,
  ) { }

  async create(createUserDto: CreateUserDto): Promise<CreateUserDto> {
    const userExist = await this.usersRepository.findOne(createUserDto.email);

    if (userExist) {
      throw new HttpException(
        `O e-mail ${createUserDto.email} já existe na base de dados`,
        HttpStatus.CONFLICT,
      );
    }

    createUserDto.password = await bcrypt.hash(createUserDto.password, 10);

    const adicionaUser = await this.usersRepository.create(createUserDto);

    if (adicionaUser) {
      delete adicionaUser.password;
      return adicionaUser;
    }

    throw new HttpException(
      `Não foi possível realizar a inclusão do registro`,
      HttpStatus.SERVICE_UNAVAILABLE,
    );
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  async signin(loginInterface: LoginInterface) {
    const user = await this.usersRepository.findByEmail(loginInterface.email);

    if (!user) {
      throw new NotFoundException('Usuário ou senha inválidos');
    }

    const match = await this.checkPassword(loginInterface.password, user);

    if (!match) {
      throw new NotFoundException('Usuário ou senha inválidos');
    }

    const jwtToken = await this.authService.createAcessToken(user.email);

    return { name: user.email, jwtToken: jwtToken };
  }

  private async checkPassword(
    password: string,
    user: CreateUserDto,
  ): Promise<boolean> {
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      throw new NotFoundException('Password not found');
    }

    return match;
  }
}
