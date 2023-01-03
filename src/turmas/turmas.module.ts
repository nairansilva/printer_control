import { TurmaRepository } from './repositories/turma.repository';
import { PrismaService } from './../../prisma/prisma.service';
import { Module } from '@nestjs/common';
import { TurmasService } from './turmas.service';
import { TurmasController } from './turmas.controller';

@Module({
  controllers: [TurmasController],
  providers: [TurmasService, PrismaService, TurmaRepository],
})
export class TurmasModule {}
