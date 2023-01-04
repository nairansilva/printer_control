import { IsString, IsNumber, IsBoolean } from 'class-validator';

export class CreateSolicitacaoDto {
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
