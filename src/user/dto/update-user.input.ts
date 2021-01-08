import { InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateUserInput {

    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'Invalid characters' })
    id?: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'Invalid characters' })
    name?: string;

    @IsOptional()
    @IsEmail()
    @IsNotEmpty({ message: 'Invalid E-mail' })
    email?: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'Password is required' })
    password?: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'Invalid characters' })
    cpf?: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'Invalid characters' })
    phone?: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'Invalid characters' })
    dateBirth?: string;



}