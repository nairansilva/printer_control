/* eslint-disable prettier/prettier */
import { Injectable, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Prisma } from '@prisma/client';
import * as firebase from 'firebase-admin';

@Injectable()
export class AuthRepository {
  constructor(private readonly prisma: PrismaService) {}

  private _collectionRef: FirebaseFirestore.CollectionReference = firebase
    .firestore()
    .collection('users');

  async findOne(idSearch: string): Promise<any> {
    const getTurmaPorId = await this._collectionRef.doc(idSearch).get();
    if (getTurmaPorId.data()) {
      return getTurmaPorId.data();
    }
    throw new HttpException(
      `Id ${idSearch} não foi encontrado`,
      HttpStatus.NOT_FOUND,
    );
  }
}
