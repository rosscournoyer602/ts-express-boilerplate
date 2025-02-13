import { Request, Response } from "express";
import { get, post, controller } from "./decorators";
import { getConnection, getRepository } from "typeorm";
import { Person } from "../entity/Person";
import { Category } from "../entity/Category";

@controller("")
class CategoryController {
  @get("/categories")
  async getAllCategories(req: Request, res: Response) {
    const categories = await getConnection("default").manager.find(Category);
    res.send(categories);
  }

  @get("/category")
  async getCategory(req: Request, res: Response) {
    const id = req.query.id as string;
    const category = await getRepository(Category).findOne(id);
    res.send(category);
  }

  @post("/categories/bulk")
  async BulkInsertCategories(req: Request, res: Response) {
    const categoryRepo = getRepository(Category);
    const { categories } = req.body;
    await categoryRepo.save(categories);
    res.send(categories);
  }
}
