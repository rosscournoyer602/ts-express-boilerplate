import { Request, Response } from "express";
import { get, post, controller } from "./decorators";
import { getConnection, getRepository } from "typeorm";
import { Product } from "../entity/Product";

@controller("")
class ProductController {
  @get("/products")
  async getAllProducts(req: Request, res: Response) {
    const products = await getConnection("default").manager.find(Product);
    res.send(products);
  }

  @get("/product")
  async getProduct(req: Request, res: Response) {
    const id = req.query.id as string;
    const products = await getRepository(Product).findOne(id);
    res.send(products);
  }

  @post("/products/bulk")
  async BulkInsertProducts(req: Request, res: Response) {
    const productRepo = getRepository(Product);
    const { products } = req.body;
    await productRepo.save(products);
    res.send(`${products.length} products added.`);
  }
}
