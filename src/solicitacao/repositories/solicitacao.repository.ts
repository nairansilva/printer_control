/* eslint-disable prettier/prettier */
import { Injectable, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { CreateSolicitacaoDto } from '../dto/create-solicitacao.dto';
import { read } from 'fs';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class SolicitacaoRepository {
  constructor(private readonly prismaService: PrismaService) { }

  async create(
    createSolicitacaoDto: CreateSolicitacaoDto,
  ): Promise<any | CreateSolicitacaoDto> {
    return await this.prismaService.solicitacao.create({ data: createSolicitacaoDto })
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

  async findAll(): Promise<any | CreateSolicitacaoDto[]> {
    const getSolicitacaos = await this.prismaService.solicitacao.findMany()
    return getSolicitacaos;
  }

  async findOne(idSearch: string): Promise<any> {
    const getSolicitacaoPorId = await this.prismaService.solicitacao.findUnique({
      where: {
        id: idSearch
      }
    });
    return getSolicitacaoPorId;
  }

  async update(
    id: string,
    updateSolicitacaoDto: { [x: string]: any },
  ): Promise<any> {
    const getSolicitacaoPorId = await this.prismaService.solicitacao.update({
      where: {
        id: id,
      },
      data: updateSolicitacaoDto,
    });

    return getSolicitacaoPorId
  }

  async remove(id: string): Promise<any> {
    const deleteUser = await this.prismaService.solicitacao.delete({
      where: {
        id: id,
      },
    })

    return deleteUser
  }
}
