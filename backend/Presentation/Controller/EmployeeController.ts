import { IEmployee } from "../../Domain/Interfaces/Employee";
import { Request, Response } from "express";

export interface  IEmployeeController {
  getAllEmployees(req: Request, res: Response): Promise<IEmployee[]>;
}

export class EmployeeController implements IEmployeeController{

  async getAllEmployees(req: Request, res: Response): Promise<IEmployee[]> {
    const employees = await Promise.resolve([]);
    res.json(employees);
    return employees;
  }
}