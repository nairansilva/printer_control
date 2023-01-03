import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TurmasModule } from './turmas/turmas.module';

@Module({
  imports: [TurmasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
