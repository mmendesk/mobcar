import { InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateCarInput {
    @IsString()
    @IsNotEmpty({ message: 'Invalid characters' })
    model: string;

    @IsNotEmpty({ message: 'Invalid characters' })
    plate: string;

    @IsString()
    @IsNotEmpty({ message: 'Invalid characters' })
    color: string;

    @IsString()
    @IsNotEmpty({ message: 'Invalid characters' })
    category: string;

    @IsString()
    @IsNotEmpty({ message: 'Invalid characters' })
    description: string;

    @IsString()
    @IsNotEmpty({ message: 'Invalid characters' })
    price: string;
}