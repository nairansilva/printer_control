import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { TurmasService } from './turmas.service';
import { CreateTurmaDto } from './dto/create-turma.dto';
import { UpdateTurmaDto } from './dto/update-turma.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('turmas')
@ApiTags('turmas')
export class TurmasController {
  constructor(private readonly turmasService: TurmasService) {}

  @ApiResponse({ status: 503, description: 'Serviço Indisponível' })
  @Post()
  create(@Body() createTurmaDto: CreateTurmaDto) {
    return this.turmasService.create(createTurmaDto);
  }

  @Post('/carga')
  createMany(@Body() createTurmaDto: CreateTurmaDto[]) {
    return this.turmasService.createMany(createTurmaDto);
  }

  @Get()
  findAll() {
    return this.turmasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.turmasService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTurmaDto: UpdateTurmaDto) {
    return this.turmasService.update(id, updateTurmaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.turmasService.remove(id);
  }

  @Delete('/carga/all')
  deleteAll() {
    return this.turmasService.deleteAll();
  }
}
