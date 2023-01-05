import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Res,
  StreamableFile,
  Header,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import express, { Request, Response } from 'express';
import { createReadStream } from 'fs';

import { get } from 'http';
import path, { join } from 'path';
import { ArquivosService } from './arquivos.service';
import { CreateArquivoDto } from './dto/create-arquivo.dto';

@Controller('arquivos')
@ApiTags('Arquivos')
export class ArquivosController {
  constructor(private readonly arquivosService: ArquivosService) {}

  @Post()
  create(@Body() createArquivoDto: CreateArquivoDto) {
    return this.arquivosService.create(createArquivoDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.arquivosService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.arquivosService.remove(+id);
  }
}
