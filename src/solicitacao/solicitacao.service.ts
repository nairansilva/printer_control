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

  findOne(id: string) {
    return this.repository.findOne(id);
  }

  update(id: string, updateSolicitacaoDto: UpdateSolicitacaoDto) {
    return this.repository.update(id, updateSolicitacaoDto);
  }

  remove(id: string) {
    return this.repository.remove(id);
  }
}
