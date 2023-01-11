import { TurmaRepository } from './repositories/turma.repository';
import { Module } from '@nestjs/common';
import { TurmasService } from './turmas.service';
import { TurmasController } from './turmas.controller';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [TurmasController],
  providers: [TurmasService, TurmaRepository, PrismaService],
})
export class TurmasModule {}
