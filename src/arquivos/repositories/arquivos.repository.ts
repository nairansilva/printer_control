/* eslint-disable prettier/prettier */
import { Injectable, Delete, HttpException, HttpStatus } from '@nestjs/common';
import * as firebase from 'firebase-admin';
import { getApp } from 'firebase-admin/app';
import {
  connectStorageEmulator,
  deleteObject,
  getBytes,
  getDownloadURL,
  getMetadata,
  getStorage,
  getStream,
  list,
  listAll,
  ListOptions,
  ref,
  SettableMetadata,
  StorageReference,
  StringFormat,
  updateMetadata,
  uploadBytes,
  uploadBytesResumable,
  UploadMetadata,
  UploadResult,
  uploadString,
} from 'firebase/storage';
import { createWriteStream, read } from 'fs';
import { get } from 'https';
import { join } from 'path';
import { DownloadInterface } from '../models/download.interface';

@Injectable()
export class ArquivosRepository {
  private _collectionRef = firebase
    .storage()
    .bucket('gs://printercontrolnestjs.appspot.com');

  async findOne(id: string): Promise<DownloadInterface> {
    const [arquivoExiste] = await this._collectionRef.file(id).exists();
    console.log(arquivoExiste);

    if (!arquivoExiste) {
      throw new HttpException('Arquivo não encontrado', HttpStatus.NOT_FOUND);
    }

    const urlSign = await this._collectionRef
      .file(id)
      .getSignedUrl({ action: 'read', expires: '03-09-2999' });

    return { nomeArquivo: id, urlDownload: urlSign };
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

    const path = `${solicitacao}/${arquivo}`;
    const [arquivoExiste] = await this._collectionRef.file(path).exists();

    if (!arquivoExiste) {
      throw new HttpException('Arquivo não encontrado', HttpStatus.NOT_FOUND);
    }

    const urlSign = await this._collectionRef
      .file(path)
      .getSignedUrl({ action: 'read', expires: '03-09-2999' });

    return { nomeArquivo: arquivo, urlDownload: urlSign };
  }

  async uploadFiles(
    file: Express.Multer.File,
    solicitacao: string
  ): Promise<void> {
    const fileBuffer = await this._collectionRef
      .file(`${solicitacao}/${file.originalname}`)
      .save(file.buffer);

    return fileBuffer;
  }
}
