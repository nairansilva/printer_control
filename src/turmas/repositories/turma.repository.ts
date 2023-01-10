import { UpdateTurmaDto } from './../dto/update-turma.dto';
import { TurmaEntity } from './../entities/turma.entity';
import { CreateTurmaDto } from './../dto/create-turma.dto';
/* eslint-disable prettier/prettier */

import { Injectable, Delete, HttpException, HttpStatus } from '@nestjs/common';
import * as firebase from 'firebase-admin';
import { writeFile,readFile } from 'fs/promises';

import { join } from 'path';

@Injectable()
export class TurmaRepository {
  constructor() {}

  private _collectionRef: FirebaseFirestore.CollectionReference = firebase
    .firestore()
    .collection('turmas');

  async create(createTurmaDto: CreateTurmaDto): Promise<any | CreateTurmaDto> {
    if (!createTurmaDto.coordenador) {
      createTurmaDto.coordenador = 'não encontrado';
    }

    const adicionaTurma = await this._collectionRef.add(createTurmaDto);
    if (adicionaTurma) {
      const returnWithId = await this.findOne(adicionaTurma.id);
      return { ...returnWithId, id: adicionaTurma.id };
    }

    throw new HttpException(
      `Não foi possível realizar a inclusão do registro`,
      HttpStatus.SERVICE_UNAVAILABLE,
    );
  }

  async deleteAll(): Promise<any> {
    const turmas = await this.findAll();
    let count = 0;
    turmas.forEach(async (turma) => {
      count++;
      await this.remove(turma.id);
    });

    return { respose: `registros excluídos com sucesso ${count}` };
  }

  async createMany(createTurmasDto: CreateTurmaDto[]): Promise<any> {
    let count = 0;
    await this.deleteAll();
    createTurmasDto.map(async (turma) => {
      count++;
      await this.create(turma);
    });

    await writeFile(join(process.cwd(), 'db', 'turmas.json'), JSON.stringify(createTurmasDto));

    return { response: `Total de Registros ${count}` };
  }

  async findAll(): Promise<any | CreateTurmaDto[]> {
    const getTurmas = await this._collectionRef.get();
    // const data = getTurmas.docs.map((doc) => {
    //   return { ...doc.data(), id: doc.id };
    // });

    // const data;
    const arquivo = await (await readFile(join(process.cwd(), 'db/turmas.json'))).toString()  

    return JSON.parse(arquivo);
  }

  async findOne(idSearch: string): Promise<any> {
    return await this._collectionRef.doc(idSearch).get();
  }

  async update(id: string, updateTurmaDto: { [x: string]: any }): Promise<any> {
    const getTurmaPorId = await this._collectionRef.doc(id);

    await getTurmaPorId.update(updateTurmaDto);
    return await this.findOne(id);
  }

  async remove(id: string): Promise<any> {
    await this._collectionRef.doc(id).delete();
    return { response: 'Registro Excluído' };
  }
}
