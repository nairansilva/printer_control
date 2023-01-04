/* eslint-disable prettier/prettier */
import { Injectable, Delete, HttpException, HttpStatus } from '@nestjs/common';
import * as firebase from 'firebase-admin';

@Injectable()
export class ArquivosRepository {

  private _collectionRef = firebase
    .storage()
    .bucket('teste')

    async findOne(id:string): Promise<any>{
      
      return this._collectionRef.get('print.jpg')
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
