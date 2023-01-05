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

    return; //this._collectionRef.get('print.jp');
  }

  // async create(idSearch: string): Promise<any> {
  //   this._collectionRef
  //   const getTurmaPorId = await this._collectionRef.doc(idSearch).get();
  //   if (getTurmaPorId.data()) {
  //     return getTurmaPorId.data();
  //   }
  //   throw new HttpException(
  //     `Id ${idSearch} não foi encontrado`,
  //     HttpStatus.NOT_FOUND,
  //   );
  // }
}
