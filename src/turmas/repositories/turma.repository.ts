import { UpdateTurmaDto } from './../dto/update-turma.dto';
import { TurmaEntity } from './../entities/turma.entity';
import { CreateTurmaDto } from './../dto/create-turma.dto';
/* eslint-disable prettier/prettier */

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class TurmaRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTurmaDto: CreateTurmaDto): Promise<TurmaEntity> {
    return this.prisma.turma_Professor.create({
      data: createTurmaDto,
    });
  }

  async createMany(
    createTurmasDto: CreateTurmaDto[],
  ): Promise<Prisma.BatchPayload> {
    return this.prisma.turma_Professor.createMany({
      data: createTurmasDto,
    });
  }

  async findAll(): Promise<TurmaEntity[]> {
    return await this.prisma.turma_Professor.findMany();
  }

  async findOne(idSearch: string): Promise<TurmaEntity> {
    return this.prisma.turma_Professor.findUnique({
      where: {
        id: idSearch,
      },
    });
  }

  async update(
    id: string,
    updateTurmaDto: UpdateTurmaDto,
  ): Promise<TurmaEntity> {
    return this.prisma.turma_Professor.update({
      where: {
        id,
      },
      data: updateTurmaDto,
    });
  }

  async remove(id: string): Promise<TurmaEntity> {
    return this.prisma.turma_Professor.delete({
      where: {
        id,
      },
    });
  }
}
