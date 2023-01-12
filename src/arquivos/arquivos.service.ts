import { ArquivosRepository } from './repositories/arquivos.repository';
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateArquivoDto } from './dto/create-arquivo.dto';
import { UpdateArquivoDto } from './dto/update-arquivo.dto';
import { DownloadInterface } from './models/download.interface';
import { Files } from '@prisma/client';

@Injectable()
export class ArquivosService {
  constructor(private readonly arquivosRepository: ArquivosRepository) { }
  create(
    diretorio: string,
    arquivo: string,
    file: Buffer = Buffer.alloc(0),
  ): Promise<any> {

    const fileOk = this.arquivosRepository.create(diretorio, arquivo, file);
    if (!fileOk) {
      throw new HttpException(
        `Não foi possível realizar o upload do arquivo ${arquivo}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );

    }
    return fileOk
  }

  findOne(id: string): Promise<CreateArquivoDto> {
    return this.arquivosRepository.findOne(id);
  }

  findAll(id: string) {
    return this.arquivosRepository.findAll(id);
  }

  async getFile(
    solicitacao: string,
    arquivo: string,
  ): Promise<DownloadInterface> {
    const file = await this.arquivosRepository.getFile(solicitacao, arquivo);

    return file;
  }

  async remove(id: string) {
    const fileDeleted = await this.arquivosRepository.delete(id);
    if (!fileDeleted) {
      throw new HttpException(
        `Não foi possível realizar a exclusão do arquivo ${id}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    };

    return this.arquivosRepository.deleteFile(fileDeleted.idSolicitacao, '');
  }

  uploadFiles(file: Express.Multer.File, solicitacao: string) {
    return this.arquivosRepository.uploadFiles(file, solicitacao);
  }
}
