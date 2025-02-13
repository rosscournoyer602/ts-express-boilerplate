import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from "typeorm";
import { Transaction } from "./Transaction";

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("text", { nullable: true })
  name?: string;

  @OneToMany(() => Transaction, (transaction) => transaction.person)
  @JoinColumn()
  transactions!: Transaction[];
}
