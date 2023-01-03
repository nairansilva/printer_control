import { Turma_Professor } from '@prisma/client';

export class TurmaEntity implements Turma_Professor {
  id: string;
  idTurmaDisc: number;
  codTurma: string;
  codDisc: string;
  disciplina: string;
  professor: string;
  num_Alunos: number;
  coordenador: string;
  dataCriacao: Date;

}
