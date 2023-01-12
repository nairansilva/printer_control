import {
  CallHandler,
  ExecutionContext,
  HttpStatus,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { HttpException } from '@nestjs/common';
import { ArquivosService } from '../arquivos.service';

@Injectable()
export class ValidationInterceptor implements NestInterceptor {
  private logger = new Logger('ValidatioInterceptor');

  constructor(private readonly arquivosService: ArquivosService) { }
  async intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest<Request>();
    this.logger.verbose(`body: ${JSON.stringify(request.body)}`);
    await this.arquivosService.create(
      request.params.solicitacao,
      request.params.arquivo,
    );
    return next.handle();
  }
}
