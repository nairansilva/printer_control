import { UpdateTurmaDto } from './../dto/update-turma.dto';
import { TurmaEntity } from './../entities/turma.entity';
import { CreateTurmaDto } from './../dto/create-turma.dto';
/* eslint-disable prettier/prettier */

import { Injectable, Delete } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { Prisma } from '@prisma/client';
import * as firebase from 'firebase-admin';

@Injectable()
export class TurmaRepository {
  constructor(private readonly prisma: PrismaService) {}

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
    return 'erro';
  }

  async deleteAll(): Promise<any> {
    const turmas = await this.findAll();
    let count = 0;
    turmas.forEach(async (turma) => {
      count++;
      await this.remove(turma.id);
    });

    return `registros excluídos com sucesso ${count}`;
  }

  async createMany(createTurmasDto: CreateTurmaDto[]): Promise<any> {
    let count = 0;
    await this.deleteAll();
    createTurmasDto.map(async (turma) => {
      count++;
      await this.create(turma);
    });
    return `Total de Registros ${count}`;
  }

  async findAll(): Promise<any | CreateTurmaDto[]> {
    const getTurmas = await this._collectionRef.get();
    const data = getTurmas.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });

    if (data) {
      return data;
    }
    return 'não achei nada';
    // return await this.prisma.turma_Professor.findMany();
  }

  async findOne(idSearch: string): Promise<any> {
    const getTurmaPorId = await this._collectionRef.doc(idSearch).get();
    if (getTurmaPorId.data()) {
      return getTurmaPorId.data();
    }
    return 'Id não encontrado';
  }

  async update(
    id: string,
    updateTurmaDto: { [x: string]: any; },
  ): Promise<any> {
    const getTurmaPorId = await this._collectionRef.doc(id);

    await getTurmaPorId.update(updateTurmaDto)
    return await this.findOne(id)
  }

  async remove(id: string): Promise<any> {
    const deleteTurma = this._collectionRef.doc(id).delete();
    return 'Registro Excluído';
  }
  //   return this.prisma.turma_Professor.delete({
  //     where: {
  //       id,
  //     },
  //   });
  // }
}
