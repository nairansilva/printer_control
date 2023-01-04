import { Injectable } from '@nestjs/common';
import { CreateTurmaDto } from './dto/create-turma.dto';
import { UpdateTurmaDto } from './dto/update-turma.dto';
import { TurmaRepository } from './repositories/turma.repository';

@Injectable()
export class TurmasService {
  constructor(private readonly repository: TurmaRepository) {}

  create(createTurmaDto: CreateTurmaDto): Promise<CreateTurmaDto> {
    return this.repository.create(createTurmaDto);
  }

  createMany(createTurmaDto: CreateTurmaDto[]): Promise<string> {
    return this.repository.createMany(createTurmaDto);
  }

  deleteAll(): Promise<string> {
    return this.repository.deleteAll();
  }

  findAll(): Promise<CreateTurmaDto[]> {
    return this.repository.findAll();
  }

  findOne(id: string): Promise<CreateTurmaDto> {
    return this.repository.findOne(id);
  }

  update(id: string, updateTurmaDto: UpdateTurmaDto): Promise<CreateTurmaDto> {
    return this.repository.update(id, updateTurmaDto);
  }

  remove(id: string): Promise<string> {
    return this.repository.remove(id);
  }
}
