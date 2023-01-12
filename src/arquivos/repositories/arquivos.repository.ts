/* eslint-disable prettier/prettier */
import { Injectable, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { createWriteStream, read } from 'fs';
import { get } from 'https';
import { join } from 'path';
import { PrismaService } from 'prisma/prisma.service';
import { DownloadInterface } from '../models/download.interface';
import { Arquivo } from '../entities/arquivo.entity';
import { Files } from '@prisma/client';
import { CreateArquivoDto } from '../dto/create-arquivo.dto';
import * as fs from 'fs';

@Injectable()
export class ArquivosRepository {

  constructor(private readonly prismaService: PrismaService) { }

  async create(diretorio: string, arquivo: string): Promise<any> {
    return this.prismaService.files.create({ data: { idSolicitacao: diretorio, nomeArquivo: arquivo } })
  }

  async findOne(id: string): Promise<CreateArquivoDto> {
    return await this.prismaService.files.findUnique({
      where: {
        id: id
      }
    })
  }

  async findAll(id: string): Promise<CreateArquivoDto[]> {
    return await this.prismaService.files.findMany({
      where: {
        idSolicitacao: id
      }
    })
  }


  async delete(id: string): Promise<CreateArquivoDto> {
    const file = await this.findOne(id)
    console.log(file)
    const deleteFile = await this.prismaService.files.delete({
      where: {
        id: id,
      },
    });
    if (deleteFile) {
      return file
    }
    return null
  }


  async deleteFile(solicitacao:string, arquivo: string){
    const dir = `${process.cwd()}/uploads/${solicitacao}`
    const retorno = fs.rmSync(dir, { recursive: true, force: true });
    console.log(dir)
    return retorno 

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


    return;
  }
}
