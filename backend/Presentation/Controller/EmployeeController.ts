import { Request, Response } from "express";
import { IEmployeeService } from "../../Application/Interfaces/IEmployeeService";

export interface  IEmployeeController {
  getAllEmployees(req: Request, res: Response): Promise<void>;
}

export class EmployeeController implements IEmployeeController{
  constructor(private readonly employeeService: IEmployeeService) {
  }

  getAllEmployees(req: Request, res: Response): Promise<void> {
    return this.employeeService.getAllEmployees()
      .then(data => {
        res.status(200).json(data);
      })
      .catch(error => {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
      });
  }


}