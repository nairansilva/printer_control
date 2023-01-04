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
import { AuthGuard } from '@nestjs/passport/dist';
import {
  ApiResponse,
  ApiSecurity,
  ApiTags,
  ApiBearerAuth,
} from '@nestjs/swagger';

@Controller('turmas')
@ApiTags('turmas')
export class TurmasController {
  constructor(private readonly turmasService: TurmasService) {}

  @ApiResponse({ status: 503, description: 'Serviço Indisponível' })
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @Post()
  create(@Body() createTurmaDto: CreateTurmaDto) {
    return this.turmasService.create(createTurmaDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @Post('/carga')
  createMany(@Body() createTurmaDto: CreateTurmaDto[]) {
    return this.turmasService.createMany(createTurmaDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @Get()
  findAll() {
    return this.turmasService.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.turmasService.findOne(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTurmaDto: UpdateTurmaDto) {
    return this.turmasService.update(id, updateTurmaDto);
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.turmasService.remove(id);
  }

  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @Delete('/carga/all')
  deleteAll() {
    return this.turmasService.deleteAll();
  }
}
