import { Request, Response } from "express";
import { get, post, controller } from "./decorators";
import { getConnection, getRepository } from "typeorm";
import { Person } from "../entity/Person";

@controller("")
class PersonController {
  @get("/persons")
  async getPeople(req: Request, res: Response) {
    const people = await getConnection("default").manager.find(Person);
    res.send(people);
  }

  @get("/person")
  async getPerson(req: Request, res: Response) {
    const id = req.query.id as string;
    const people = await getRepository(Person).findOne(id);
    res.send(people);
  }
}
