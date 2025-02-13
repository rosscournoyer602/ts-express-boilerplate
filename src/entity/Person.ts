import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { AuthUser } from "./AuthUser";
import { Transaction } from "./Transaction";

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("text", { nullable: true })
  name?: string;

  @OneToMany(() => Transaction, (transaction) => transaction.person)
  transactions!: Transaction[];
}
