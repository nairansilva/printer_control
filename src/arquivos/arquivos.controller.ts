import {
  Controller,
  Get,
  Post,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  Req,
  Body,
} from "@nestjs/common";
import { FileInterceptor, FilesInterceptor } from "@nestjs/platform-express";
import {
  ApiExcludeController,
} from "@nestjs/swagger";

import { ArquivosService } from "./arquivos.service";

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

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.arquivosService.remove(+id);
  }

  @Post("upload/:solicitacao")
  @UseInterceptors(FileInterceptor("file"))
  uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body() body,
    @Param('solicitacao') solicitacao: string,
    @Req() request: Request,
  ) {
    console.log(request.headers);
     return this.arquivosService.uploadFiles(file, solicitacao);
  }
}
