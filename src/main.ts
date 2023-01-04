import { NestFactory } from '@nestjs/core';
import { json, urlencoded } from 'express';
import { AppModule } from './app.module';
import { AuthGuard } from './auth/auth.guard';
import * as dotenv from 'dotenv';
import { initializeFirebase } from './firebase.config';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

dotenv.config();
initializeFirebase();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalGuards(new AuthGuard());
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ extended: true, limit: '50mb' }));

  const config = new DocumentBuilder()
    .setTitle('Controle de Impressão')
    .setDescription('Ferramenta para Controle de Impressões')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  await app.listen(3000);
}
bootstrap();
