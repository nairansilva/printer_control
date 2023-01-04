import { AuthService } from './../../auth/auth.service';
import { CreateUserDto } from './../dto/create-user.dto';
import * as bcrypt from 'bcrypt';
/* eslint-disable prettier/prettier */

import {
  Injectable,
  Delete,
  HttpException,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';
import * as firebase from 'firebase-admin';

@Injectable()
export class UsersRepository {
  constructor(private readonly authService: AuthService) {}

  private _collectionRef: FirebaseFirestore.CollectionReference = firebase
    .firestore()
    .collection('users');

  async create(createUserDto: CreateUserDto): Promise<any | CreateUserDto> {
    createUserDto.senha = await bcrypt.hash(createUserDto.senha, 10);
    const userExist = await this.findOne(createUserDto.email);

    if (userExist) {
      throw new HttpException(
        `O e-mail ${createUserDto.email} já existe na base de dados`,
        HttpStatus.CONFLICT
      )
    }
    
    const adicionaUser = await this._collectionRef
      .doc(createUserDto.email)
      .set(createUserDto);
    if (adicionaUser) {
      const returnWithId = await this.findOne(createUserDto.email);
      return { ...returnWithId };
    }

    throw new HttpException(
      `Não foi possível realizar a inclusão do registro`,
      HttpStatus.SERVICE_UNAVAILABLE,
    );
  }

  async findOne(idSearch: string): Promise<any> {
    const getUserPorId = await this._collectionRef.doc(idSearch).get();
    if (getUserPorId.data()) {
      return getUserPorId.data();
    }
  }

  public async signin(
    createUserDto: CreateUserDto,
  ): Promise<{ name: string; jwtToken: string; email: string }> {
    const user = await this.findByEmail(createUserDto.email);
    const match = await this.checkPassword(createUserDto.senha, user);

    if (!match) {
      throw new NotFoundException('invalid credentials');
    }
    
    const jwtToken = await this.authService.createAcessToken(user.email);

    return { name: user.email, jwtToken: jwtToken, email: user.email };
  }

  private async findByEmail(email: string): Promise<any> {
    const findUser = await this._collectionRef
      .where('email', '==', email)
      .get();
    let user;

    findUser.forEach((doc) => (user = doc.data()));

    if (!user) {
      throw new NotFoundException('Email not found');
    }

    return user;
  }

  private async checkPassword(
    password: string,
    user: CreateUserDto,
  ): Promise<boolean> {
    const match = await bcrypt.compare(password, user.senha);

    if (!match) {
      throw new NotFoundException('Password not found');
    }

    return match;
  }
}
