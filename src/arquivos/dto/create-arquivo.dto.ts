import { ApiProperty } from '@nestjs/swagger';
import { Files } from '@prisma/client';
import { IsOptional, IsString } from 'class-validator';

export class CreateArquivoDto implements Files {
    id: string;
    idSolicitacao: string;
    nomeArquivo: string;

}
