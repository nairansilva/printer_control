import { AuthService } from './../../auth/auth.service';
import { CreateUserDto } from './../dto/create-user.dto';
import * as bcrypt from 'bcrypt';
/* eslint-disable prettier/prettier */

import {
  Injectable,
  Delete,
  HttpException,
  HttpStatus,
  NotFoundException,
} from '@nestjs/common';
import * as firebase from 'firebase-admin';

@Injectable()
export class UsersRepository {
  constructor(private readonly authService: AuthService) {}

  private _collectionRef: FirebaseFirestore.CollectionReference = firebase
    .firestore()
    .collection('users');

  async create(createUserDto: CreateUserDto): Promise<any | CreateUserDto> {
    return this._collectionRef.doc(createUserDto.email).set(createUserDto);
  }

  async findOne(idSearch: string): Promise<any> {
    const getUserPorId = await this._collectionRef.doc(idSearch).get();
    if (getUserPorId.data()) {
      return getUserPorId.data();
    }
  }

  async findByEmail(email: string): Promise<any> {
    const findUser = await this._collectionRef
      .where('email', '==', email)
      .get();
    let user;

    findUser.forEach((doc) => (user = doc.data()));

    return user;
  }
}
