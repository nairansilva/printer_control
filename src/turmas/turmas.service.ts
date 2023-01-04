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

  createMany(createTurmaDto: CreateTurmaDto[]) {
    return this.repository.createMany(createTurmaDto);
  }

  deleteAll() {
    return this.repository.deleteAll();
  }

  findAll() {
    return this.repository.findAll();
  }

  findOne(id: string) {
    return this.repository.findOne(id);
  }

  update(id: string, updateTurmaDto: UpdateTurmaDto) {
    return this.repository.update(id, updateTurmaDto);
  }

  remove(id: string) {
    return this.repository.remove(id);
  }
}
