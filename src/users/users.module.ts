import { AuthModule } from 'src/auth/auth.module';
import { PrismaService } from 'prisma/prisma.service';
import { UsersRepository } from './repositories/users.repository';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  controllers: [UsersController],
  imports: [AuthModule],
  providers: [UsersService, UsersRepository, PrismaService],
  exports: [UsersService],
})
export class UsersModule {}
