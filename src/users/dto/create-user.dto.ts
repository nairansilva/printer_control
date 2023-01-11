import { User } from '@prisma/client';
import { Exclude } from 'class-transformer';
import { IsDate, IsEmail, IsString, IsNumber } from 'class-validator';

export class CreateUserDto implements User {
  id: string;
  createdAt: Date;
  updatedAt: Date;

  @IsNumber()
  rule: number;

  @IsString()
  name: string;

  @IsString()
  password: string;

  @IsEmail()
  email: string;

}
