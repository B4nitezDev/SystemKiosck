import { Router, Request, Response } from "express";
import { EmployeeController } from "../Controller/EmployeeController";

export class IndexRoutes {
  public routes: Router = Router();

  constructor(private employeeController: EmployeeController) {
    this.init();
  }

  init() {
    this.routes.get("/users", (req, res, next) => {
      this.employeeController.getAllEmployees(req, res).catch(next);
    });

  }
}