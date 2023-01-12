import { ApiProperty } from '@nestjs/swagger';
import { Files } from '@prisma/client';
import { IsOptional, IsString } from 'class-validator';

export class CreateArquivoDto implements Files {
    file: Buffer;
    id: string;
    nomeArquivo: string;
    idSolicitacao: string;

}
