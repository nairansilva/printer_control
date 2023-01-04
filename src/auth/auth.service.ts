import { UserEntity } from './../users/entities/user.entity';
import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { sign } from 'jsonwebtoken';
import { Request } from 'express';
import { AuthRepository } from './repositories/auth.repository';

@Injectable()
export class AuthService {
  constructor(private readonly repository: AuthRepository) {}

  public async createAcessToken(userId: string): Promise<string> {
    return sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRATION,
    });
  }

  public async validateUser(UserId: string): Promise<UserEntity> {
    const user = await this.repository.findOne(UserId);

    if (!user) {
      throw new UnauthorizedException('user not found');
    }

    return user;
  }

  public returnJwtExtractor(): (request: Request) => string {
    return AuthService.jwtExtractor;
  }

  private static jwtExtractor(request: Request): string {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new BadRequestException('Token não informado');
    }

    const [, token] = authHeader.split(' ');

    return token;
  }
}
