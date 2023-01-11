/* eslint-disable prettier/prettier */
import { Injectable, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { createWriteStream, read } from 'fs';
import { get } from 'https';
import { join } from 'path';
import { DownloadInterface } from '../models/download.interface';

@Injectable()
export class ArquivosRepository {

  async findOne(id: string): Promise<DownloadInterface> {
    return { nomeArquivo: '', urlDownload: 'urlSign' };
  }

  async getFile(
    solicitacao: string,
    arquivo: string,
  ): Promise<DownloadInterface> {
    // const stream = await this._collectionRef
    //   .file('/rename/package.json').createReadStream()
    //   console.log(stream)

    //   return stream

    // const stream = await this._collectionRef
    //   .file('rename/Tutorial para conectar ao VPN.docx')
    //   .download();

    // const [teste] = stream;

    return { nomeArquivo: 'arquivo', urlDownload: 'urlSign' };
  }

  async uploadFiles(
    file: Express.Multer.File,
    solicitacao: string
  ): Promise<void> {


    return ;
  }
}
