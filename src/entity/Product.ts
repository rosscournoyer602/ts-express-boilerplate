import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("text", { nullable: true })
  name!: string;
  description!: string;
  image_url!: string;
}
