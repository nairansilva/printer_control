import { AuthModule } from 'src/auth/auth.module';
import { UsersRepository } from './repositories/users.repository';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  controllers: [UsersController],
  imports: [AuthModule, PrismaModule],
  providers: [UsersService, UsersRepository],
  exports: [UsersService],
})
export class UsersModule {}
