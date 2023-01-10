import { Module } from '@nestjs/common';
import { SolicitacaoService } from './solicitacao.service';
import { SolicitacaoController } from './solicitacao.controller';
import { SolicitacaoRepository } from './repositories/solicitacao.repository';

@Module({
  controllers: [SolicitacaoController],
  providers: [SolicitacaoService, SolicitacaoRepository],
})
export class SolicitacaoModule {}
