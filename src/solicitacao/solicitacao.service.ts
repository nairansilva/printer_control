import { Injectable } from '@nestjs/common';
import { CreateSolicitacaoDto } from './dto/create-solicitacao.dto';
import { UpdateSolicitacaoDto } from './dto/update-solicitacao.dto';
import { SolicitacaoRepository } from './repositories/solicitacao.repository';

@Injectable()
export class SolicitacaoService {
  constructor(private readonly repository: SolicitacaoRepository) {}

  create(createSolicitacaoDto: CreateSolicitacaoDto) {
    return this.repository.create(createSolicitacaoDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} solicitacao`;
  }

  update(id: number, updateSolicitacaoDto: UpdateSolicitacaoDto) {
    return `This action updates a #${id} solicitacao`;
  }

  remove(id: number) {
    return `This action removes a #${id} solicitacao`;
  }
}
