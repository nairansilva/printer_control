import { UpdateTurmaDto } from './../dto/update-turma.dto';
import { TurmaEntity } from './../entities/turma.entity';
import { CreateTurmaDto } from './../dto/create-turma.dto';
/* eslint-disable prettier/prettier */

import { Injectable, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { writeFile, readFile } from 'fs/promises';

import { join } from 'path';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class TurmaRepository {
  constructor(private prismaService: PrismaService) { }

  async create(createTurmaDto: CreateTurmaDto): Promise<any | CreateTurmaDto> {
    if (!createTurmaDto.coordenador) {
      createTurmaDto.coordenador = 'não encontrado';
    }

    const adicionaTurma = await this.prismaService.turma.create({ data: createTurmaDto });//await this.prismaService.turma.create({data: createTurmaDto});
    if (adicionaTurma) {
      return { adicionaTurma };
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
    // const getTurmas = await this._collectionRef.get();
    const arquivo = await (await readFile(join(process.cwd(), 'db/turmas.json'))).toString()

    return JSON.parse(arquivo);
  }

  async findOne(idSearch: string): Promise<any> {
    // return await this._collectionRef.doc(idSearch).get();
  }

  async update(id: string, updateTurmaDto: { [x: string]: any }): Promise<any> {
    // const getTurmaPorId = await this._collectionRef.doc(id);

    // await getTurmaPorId.update(updateTurmaDto);
    // return await this.findOne(id);
  }

  async remove(id: string): Promise<any> {
    // await this._collectionRef.doc(id).delete();
    // return { response: 'Registro Excluído' };
  }
}
