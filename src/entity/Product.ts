import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Category } from "../entity/Category";
@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column("text")
  name!: string;
  @Column("text")
  description!: string;
  @Column("text")
  image_url!: string;
  @ManyToOne(() => Category, (category) => category.products)
  category!: Category;
}
