import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTurmaDto {
  @IsNotEmpty()
  @IsNumber()
  idTurmaDisc: number;

  @IsNotEmpty()
  @IsNumber()
  codTurma: string;

  @IsNotEmpty()
  @IsString()
  codDisc: string;

  @IsNotEmpty()
  @IsString()
  disciplina: string;

  @IsNotEmpty()
  @IsString()
  professor: string;

  @IsNotEmpty()
  @IsNumber()
  num_Alunos: number;

  @IsNotEmpty()
  @IsString()
  coornador: string;
}
