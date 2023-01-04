import { ArquivosRepository } from './repositories/arquivos.repository';
import { Injectable } from '@nestjs/common';
import { CreateArquivoDto } from './dto/create-arquivo.dto';
import { UpdateArquivoDto } from './dto/update-arquivo.dto';

@Injectable()
export class ArquivosService {
  constructor(private readonly arquivosRepository: ArquivosRepository) {}
  create(createArquivoDto: CreateArquivoDto) {
    return 'This action adds a new arquivo';
  }

  findOne(id: number) {
    return this.arquivosRepository.findOne('');
  }

  remove(id: number) {
    return `This action removes a #${id} arquivo`;
  }
}
