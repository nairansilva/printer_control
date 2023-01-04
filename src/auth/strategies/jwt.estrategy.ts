import { JwtPayload } from './../models/jwt-payload.model';
import { UserEntity } from './../../users/entities/user.entity';
import { UnauthorizedException } from '@nestjs/common';
/* eslint-disable prettier/prettier */
import { AuthService } from './../auth.service';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';

@Injectable()
export class JwtEstrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: authService.returnJwtExtractor(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(jwtPayload: JwtPayload): Promise<UserEntity> {

    const user = await this.authService.validateUser(jwtPayload.userId);

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
