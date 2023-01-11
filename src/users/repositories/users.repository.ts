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
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class UsersRepository {
  constructor(private readonly prismaService: PrismaService) { }

  async create(createUserDto: CreateUserDto): Promise<CreateUserDto> {
    return await this.prismaService.user.create({ data: createUserDto });
    // return this._collectionRef.doc(createUserDto.email).set(createUserDto);
  }

  async findOne(idSearch: string): Promise<any> {
    const getUserPorId = await this.prismaService.user.findUnique({
      where: {
        email: idSearch,
      },
    })

    if (getUserPorId) {
      return getUserPorId;
    }
  }

  async findByEmail(email: string): Promise<any> {
    const getUserPorEmail = await this.prismaService.user.findUnique({
      where: {
        email: email,
      },
    })
    return getUserPorEmail;
  }
}
