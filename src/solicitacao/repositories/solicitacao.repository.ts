/* eslint-disable prettier/prettier */
import { Injectable, Delete, HttpException, HttpStatus } from '@nestjs/common';
import * as firebase from 'firebase-admin';
import { CreateSolicitacaoDto } from '../dto/create-solicitacao.dto';

@Injectable()
export class SolicitacaoRepository {
  constructor() { }

  private _collectionRef: FirebaseFirestore.CollectionReference = firebase
    .firestore()
    .collection('solicitacao');

  async create(
    createSolicitacaoDto: CreateSolicitacaoDto,
  ): Promise<any | CreateSolicitacaoDto> {
    const adicionaSolicitacao = await this._collectionRef.add(
      createSolicitacaoDto,
    );
    if (adicionaSolicitacao) {
      const returnWithId = await this.findOne(adicionaSolicitacao.id);
      return { ...returnWithId, id: adicionaSolicitacao.id };
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

  async createMany(
    createSolicitacaosDto: CreateSolicitacaoDto[],
  ): Promise<any> {
    let count = 0;
    await this.deleteAll();
    createSolicitacaosDto.map(async (turma) => {
      count++;
      await this.create(turma);
    });
    return { response: `Total de Registros ${count}` };
  }

  async findAll(): Promise<any | CreateSolicitacaoDto[]> {
    const getSolicitacaos = await this._collectionRef.get();
    const data = getSolicitacaos.docs.map((doc) => {
      return { ...doc.data(), id: doc.id };
    });

    return data;
  }

  async findOne(idSearch: string): Promise<any> {
    const getSolicitacaoPorId = await this._collectionRef.doc(idSearch).get();
    if (getSolicitacaoPorId.data()) {
      return getSolicitacaoPorId.data();
    }
    throw new HttpException(
      `Id ${idSearch} não foi encontrado`,
      HttpStatus.NOT_FOUND,
    );
  }

  async update(
    id: string,
    updateSolicitacaoDto: { [x: string]: any },
  ): Promise<any> {
    const getSolicitacaoPorId = await this._collectionRef.doc(id);

    await getSolicitacaoPorId.update(updateSolicitacaoDto);
    return await this.findOne(id);
  }

  async remove(id: string): Promise<any> {
    const deleteSolicitacao = this._collectionRef.doc(id).delete();
    return { response: 'Registro Excluído' };
  }
}
