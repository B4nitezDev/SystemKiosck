import { Router } from "express";
import { IEmployeeController } from "../Controller/EmployeeController";
import { Request, Response } from "express";

export class EmployeeRoutes {
  public routes: Router = Router();

  constructor(private employeeController: IEmployeeController) {
    this.configRoutes();
  }

  configRoutes(): void {
    this.routes.get('/all', (req: Request, res: Response) => this.employeeController.getAllEmployees(req, res))
  }
}