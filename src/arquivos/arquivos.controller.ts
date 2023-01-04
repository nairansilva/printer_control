import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ArquivosService } from './arquivos.service';
import { CreateArquivoDto } from './dto/create-arquivo.dto';

@Controller('arquivos')
export class ArquivosController {
  constructor(private readonly arquivosService: ArquivosService) {}

  @Post()
  create(@Body() createArquivoDto: CreateArquivoDto) {
    return this.arquivosService.create(createArquivoDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.arquivosService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.arquivosService.remove(+id);
  }
}
