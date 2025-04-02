import { CreateEmployeeDto, EmployeeDto } from "../../Shared/Dtos/Employees/IEmployees.dto";

export interface IEmployeeService {
  getAllEmployees(): Promise<EmployeeDto[]>;
  saveEmployee(employee: CreateEmployeeDto): Promise<EmployeeDto>;
}
