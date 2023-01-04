import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsBoolean } from 'class-validator';

export class CreateSolicitacaoDto {
  @ApiProperty({ description: 'Nome do Solicitante' })
  @IsString()
  solicitante: string;

  @IsString()
  solicitante_id: string;

  @IsString()
  aprovador: string;

  @IsNumber()
  status: number;

  @IsBoolean()
  finalizado: boolean;

  @IsString()
  coordenador: string;

  @IsString()
  coordenador_id: string;
}
