import { Router, Request, Response } from "express";
import { EmployeeController } from "../Controller/EmployeeController";
import { EmployeeRoutes } from "./employee.routes";

export class IndexRoutes {
  public routes: Router = Router();

  constructor(private employeeRoutes: EmployeeRoutes) {
    this.configRoutes();
  }

  private configRoutes(): void {
    this.routes.use('/api/employees', this.employeeRoutes.routes);
  }
}