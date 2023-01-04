import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthGuard } from './auth/auth.guard';
import { TurmasModule } from './turmas/turmas.module';
import { SolicitacaoModule } from './solicitacao/solicitacao.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [TurmasModule, SolicitacaoModule, UsersModule, AuthModule],
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
