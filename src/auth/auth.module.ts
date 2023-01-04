import { JwtEstrategy } from './strategies/jwt.estrategy';
import { PrismaService } from 'prisma/prisma.service';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthRepository } from './repositories/auth.repository';

@Module({
  providers: [AuthService, AuthRepository, PrismaService, JwtEstrategy],
  exports: [AuthService],
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: process.env.JWT_EXPIRATION },
    }),
  ],
})
export class AuthModule {}
