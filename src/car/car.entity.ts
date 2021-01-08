import { ObjectType, Field, ID } from "@nestjs/graphql";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@ObjectType()
@Entity()
export class Car {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id: string;

    @Column()
    model: string;

    @Column()
    plate: string;

    @Column()
    color: string;

    @Column()
    category: string;

    @Column()
    description: string;

    @Column()
    price: string;

}