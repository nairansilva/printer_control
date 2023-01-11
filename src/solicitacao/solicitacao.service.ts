import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateSolicitacaoDto } from './dto/create-solicitacao.dto';
import { UpdateSolicitacaoDto } from './dto/update-solicitacao.dto';
import { SolicitacaoRepository } from './repositories/solicitacao.repository';

@Injectable()
export class SolicitacaoService {
  constructor(private readonly repository: SolicitacaoRepository) {}

  async create(createSolicitacaoDto: CreateSolicitacaoDto) {
    const solicitacao = await this.repository.create(createSolicitacaoDto)
    if (solicitacao) {
      return solicitacao;
    }
    throw new HttpException(
      `Não foi possível realizar a inclusão do registro`,
      HttpStatus.SERVICE_UNAVAILABLE,
    );
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
