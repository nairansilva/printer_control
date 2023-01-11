import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsBoolean, IsEmail } from 'class-validator';
import { Solicitacao } from '@prisma/client';

export class CreateSolicitacaoDto implements Solicitacao {
  id: string;

  @IsEmail()
  email_solicitante: string;

  @IsString()
  descricao: string;

  @IsNumber()
  idTurmaDisc: number;

  @IsEmail()
  email_coordenador: string;

  @IsString()
  codTurma: string;

  @IsNumber()
  status: number

}
