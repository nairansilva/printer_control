import { ArquivosRepository } from './repositories/arquivos.repository';
import { Injectable } from '@nestjs/common';
import { CreateArquivoDto } from './dto/create-arquivo.dto';
import { UpdateArquivoDto } from './dto/update-arquivo.dto';
import { DownloadInterface } from './models/download.interface';

@Injectable()
export class ArquivosService {
  constructor(private readonly arquivosRepository: ArquivosRepository) {}
  create(createArquivoDto: CreateArquivoDto) {
    return 'This action adds a new arquivo';
  }

  findOne(id: string): Promise<DownloadInterface> {
    return this.arquivosRepository.findOne(id);
  }

  async getFile(
    solicitacao: string,
    arquivo: string,
  ): Promise<DownloadInterface> {
    const file = await this.arquivosRepository.getFile(solicitacao, arquivo);

    return file;
  }

  remove(id: number) {
    return `This action removes a #${id} arquivo`;
  }

  uploadFiles(file: Express.Multer.File, solicitacao: string) {
    return this.arquivosRepository.uploadFiles(file, solicitacao);
  }
}
