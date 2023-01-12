import { ArquivosRepository } from './repositories/arquivos.repository';
import { Module } from '@nestjs/common';
import { ArquivosService } from './arquivos.service';
import { ArquivosController } from "./arquivos.controller";
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [ArquivosController],
  providers: [ArquivosService, ArquivosRepository, PrismaService],
})
export class ArquivosModule { }
