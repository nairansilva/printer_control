/* eslint-disable prettier/prettier */
import { Injectable, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class AuthRepository {
  constructor(private readonly prismaService: PrismaService) { }

  async findOne(idSearch: string): Promise<any> {
    const getTurmaPorId = await this.prismaService.user.findUnique({ where: { email: idSearch } });
    if (getTurmaPorId) {
      return getTurmaPorId;
    }
    throw new HttpException(
      `Id ${idSearch} não foi encontrado`,
      HttpStatus.NOT_FOUND,
    );
  }
}
