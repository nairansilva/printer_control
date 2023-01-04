import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateTurmaDto {

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

  @ApiProperty({ description: 'Nome do Professor' })
  @IsNotEmpty()
  @IsString()
  professor: string;

  @ApiProperty({ description: 'Número de Alunos' })
  @IsNotEmpty()
  @IsNumber()
  num_Alunos: number;

  @ApiProperty({ description: 'Nome do Coordenador' })
  @IsNotEmpty()
  @IsString()
  coordenador: string;
}
