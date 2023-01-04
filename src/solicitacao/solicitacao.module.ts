import { Module } from '@nestjs/common';
import { SolicitacaoService } from './solicitacao.service';
import { SolicitacaoController } from './solicitacao.controller';
import { SolicitacaoRepository } from './repositories/solicitacao.repository';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [SolicitacaoController],
  providers: [SolicitacaoService, SolicitacaoRepository, PrismaService],
})
export class SolicitacaoModule {}
