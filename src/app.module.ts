import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthGuard } from './auth/auth.guard';
import { TurmasModule } from './turmas/turmas.module';
import { UsersModule } from './users/users.module';
import { join } from 'path';
import { SolicitacaoModule } from './solicitacao/solicitacao.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ArquivosModule } from './arquivos/arquivos.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'swagger-static'),
      serveRoot: process.env.NODE_ENV === 'development' ? '/' : '/api',
    }),
    TurmasModule,
    SolicitacaoModule,
    UsersModule,
    AuthModule,
    ArquivosModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
