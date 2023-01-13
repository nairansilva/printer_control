import {
  Controller,
  Get,
  Post,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  ParseFilePipe,
  FileTypeValidator,
  MaxFileSizeValidator,
  Res,
  HttpStatus,
  Body,
  Req,
} from "@nestjs/common";
import * as fs from 'fs';
import { FileInterceptor, FilesInterceptor } from "@nestjs/platform-express";
import {
  ApiExcludeController,
} from "@nestjs/swagger";
import { diskStorage } from "multer";
import { extname } from "path";

import { ArquivosService } from "./arquivos.service";
import { HttpException } from '@nestjs/common';
import { ValidationInterceptor } from './interceptors/validation.interceptor';
import { Arquivo } from './entities/arquivo.entity';

@Controller("arquivos")
@ApiExcludeController()
export class ArquivosController {
  constructor(private readonly arquivosService: ArquivosService) { }

  @Get("downloadUrl/:solicitacao/:arquivo")
  async getFile(
    @Param("solicitacao") solicitacao: string,
    @Param("arquivo") arquivo: string
  ) {
    const file = await this.arquivosService.getFile(solicitacao, arquivo);
    // if (id == 'teste.jpg') {
    // response.contentType(
    //   'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    // );
    // } else {

    // }

    return file;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.arquivosService.remove(id);
  }

  @Post('upload/buffer/:solicitacao')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Param('solicitacao') solicitacao: string
  ) {
    return this.arquivosService.create(solicitacao, 'teste', file.buffer);
  }

  @Get('firebase/downloadUrl/:solicitacao/:arquivo')
  async getFileUrl(
    @Param('solicitacao') solicitacao: string,
    @Param('arquivo') arquivo: string
  ) {
    const file = await this.arquivosService.getFileUrl(solicitacao, arquivo);

    return file;
  }

  @Post('firebase/upload/:solicitacao/:arquivo')
  @UseInterceptors(ValidationInterceptor, FileInterceptor('file'))
  uploadFileFirebase(
    @UploadedFile() file: Express.Multer.File,
    @Body() body,
    @Param('solicitacao') solicitacao: string,
    @Param('arquivo') arquivo: string,
    @Req() request: Request,
  ) {
    console.log(request.headers);
    return this.arquivosService.uploadFileFirebase(file, solicitacao);
  }

  @Delete('firebase/:solicitacao/:arquivo')
  removeFirebase(
    @Param('solicitacao') solicitacao: string,
    @Param('arquivo') arquivo: string) {
    return this.arquivosService.removeFirebase(solicitacao, arquivo);
  }


  @Delete('firebase/:solicitacao')
  removeSolicitacaoFirebase(
    @Param('solicitacao') solicitacao: string) {
    return this.arquivosService.removeFirebase(solicitacao);
  }
  
  @Get('download/:fileName')
  download(@Res() res, @Param('fileName') fileName: string) {
    return res.download(process.cwd() + '/uploads/' + fileName);
  }

  @Get('files/:id')
  findAll(@Param('id') id: string) {
    return this.arquivosService.findAll(id)
  }


  @Post('upload/local/:solicitacao/:arquivo')
  @UseInterceptors(
    ValidationInterceptor,
    FileInterceptor('file', {
      storage: diskStorage({
        destination: function (req, file, cb) {

          const diretorioSolicitacao = `${process.cwd()}/uploads/${req.params.solicitacao
            }`;
          if (
            !fs.existsSync(
              diretorioSolicitacao,
            )
          ) {
            fs.mkdirSync(
              diretorioSolicitacao, { recursive: true }
            );
          }
          cb(null, `${diretorioSolicitacao}`);
        }, //,
        filename: (req, file, cb) => {
          //Calling the callback passing the random name generated with the original extension name
          cb(null, `${req.params.arquivo}`)
        },
      }),
    }),
  )
  uploadLocal(@UploadedFile(
    new ParseFilePipe({
      validators: [
        new FileTypeValidator({ fileType: '.(png|jpeg|jpg|pdf|doc|docx)' }),
        new MaxFileSizeValidator({ maxSize: 1024 * 1024 * 4 }),
      ],
    }),
  )
  file: Express.Multer.File,
    @Param('solicitacao') solicitacao: string,
    @Param('arquivo') arquivo: string,
  ) {
    const diretorioSolicitacao = `${process.cwd()}/uploads/${solicitacao}/${arquivo}`
    // console.log(diretorioSolicitacao)
    // const teste = fs.createReadStream(diretorioSolicitacao)
    console.log(file.buffer);
    return true
  }

}
