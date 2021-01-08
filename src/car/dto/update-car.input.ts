import { InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateCarInput {
    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'Invalid characters' })
    model?: string;

    @IsOptional()
    @IsNotEmpty({ message: 'Invalid characters' })
    plate?: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'Invalid characters' })
    color?: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'Invalid characters' })
    category?: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'Invalid characters' })
    description?: string;
    
    @IsOptional()
    @IsString()
    @IsNotEmpty({ message: 'Invalid characters' })
    price?: string;
}