import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateArquivoDto {
  @IsOptional()
  @IsString()
  @ApiProperty({ description: 'Nome do Arquivo' })
  nomeArquivo: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ description: 'Url para Download' })
  urlDownload: string;
}
