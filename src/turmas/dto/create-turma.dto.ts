import { ApiProperty } from '@nestjs/swagger';
import { Turma } from '@prisma/client';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTurmaDto implements Turma {
  id: string;
  @ApiProperty({ description: 'Id da disciplina da Turma' })
  @IsNotEmpty()
  @IsNumber()
  idTurmaDisc: number;

  @ApiProperty({ description: 'Código da Turma' })
  @IsNotEmpty()
  @IsString()
  codTurma: string;

  @ApiProperty({ description: 'Códico da Disciplina' })
  @IsNotEmpty()
  @IsString()
  codDisc: string;

  @ApiProperty({ description: 'Nome da Disciplina' })
  @IsNotEmpty()
  @IsString()
  disciplina: string;

  @ApiProperty({ description: 'Email do Professor' })
  @IsNotEmpty()
  @IsString()
  email_professor: string;

  @ApiProperty({ description: 'Nome do Professor' })
  @IsNotEmpty()
  @IsString()
  professor: string;

  @ApiProperty({ description: 'Número de Alunos' })
  @IsNotEmpty()
  @IsNumber()
  num_Alunos: number;

  @ApiProperty({ description: 'Email do Coordenador' })
  @IsNotEmpty()
  @IsString()
  email_coordenador: string;

  @ApiProperty({ description: 'Nome do Coordenador' })
  @IsNotEmpty()
  @IsString()
  coordenador: string;
}
