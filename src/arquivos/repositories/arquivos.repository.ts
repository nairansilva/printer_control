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
import * as firebase from 'firebase-admin';

@Injectable()
export class ArquivosRepository {

  constructor(private readonly prismaService: PrismaService) { }

  private _collectionRef = firebase
    .storage()
    .bucket('gs://printercontrolnestjs.appspot.com');

  async create(diretorio: string, arquivo: string, file: Buffer = Buffer.alloc(0)): Promise<any> {
    return this.prismaService.files.create({ data: { idSolicitacao: diretorio, nomeArquivo: arquivo, file: file } })
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


  async deleteFile(solicitacao: string, arquivo: string) {
    const dir = `${process.cwd()}/uploads/${solicitacao}`
    const retorno = fs.rmSync(dir, { recursive: true, force: true });
    console.log(dir)
    return retorno

  }

  async uploadFiles(
    file: Express.Multer.File,
    solicitacao: string
  ): Promise<void> {


    return;
  }

  async uploadFilesFirebase(
    file: Express.Multer.File,
    solicitacao: string
  ): Promise<void> {

    console.log(file)
    const fileBuffer = await this._collectionRef
      .file(`${solicitacao}/${file.originalname}`)
      .save(file.buffer);

    return fileBuffer;
  }

  async getFileUrl(
    solicitacao: string,
    arquivo: string,
  ): Promise<DownloadInterface> {

    const path = `${solicitacao}/${arquivo}`;
    console.log(path)

    const [arquivoExiste] = await this._collectionRef.file(path).exists();

    console.log(arquivoExiste)
    if (!arquivoExiste) {
      throw new HttpException('Arquivo não encontrado', HttpStatus.NOT_FOUND);
    }

    const urlSign = await this._collectionRef
      .file(path)
      .getSignedUrl({ action: 'read', expires: '03-09-2999' });

    return { nomeArquivo: arquivo, urlDownload: urlSign };
  }

  async deleteFileFirebase(solicitacao:string, arquivo = '') {
    let deleteSolicitacao;
    if(arquivo === ''){
      deleteSolicitacao = await this._collectionRef.deleteFiles({prefix: solicitacao})
    } else {
      deleteSolicitacao = await this._collectionRef.file(solicitacao+'/'+arquivo).delete()
    }


    return deleteSolicitacao
  }
}
