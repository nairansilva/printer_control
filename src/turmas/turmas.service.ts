import { Injectable } from '@nestjs/common';
import { CreateTurmaDto } from './dto/create-turma.dto';
import { UpdateTurmaDto } from './dto/update-turma.dto';
import { TurmaRepository } from './repositories/turma.repository';

@Injectable()
export class TurmasService {
  constructor(private readonly repository: TurmaRepository) {}

  create(createTurmaDto: CreateTurmaDto) {
    return this.repository.create(createTurmaDto);
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} turma`;
  }

  update(id: number, updateTurmaDto: UpdateTurmaDto) {
    return `This action updates a #${id} turma`;
  }

  remove(id: number) {
    return `This action removes a #${id} turma`;
  }
}
