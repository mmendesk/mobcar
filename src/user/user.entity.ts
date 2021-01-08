import { ObjectType, Field, ID, HideField } from "@nestjs/graphql";
import { hashPasswordTransform } from "../common/transformers/crypto-transform";
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

@ObjectType()
@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    @Field(() => ID)
    id: string;

    @Column()
    name: string;

    @Column()
    cpf: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column()
    dateBirth: string;

    @Column({
        transformer: hashPasswordTransform
    })
    @HideField()
    password: string;
}