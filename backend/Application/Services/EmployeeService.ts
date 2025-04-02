import { IEmployeeService } from "../Interfaces/IEmployeeService";
import { IUserMapper } from "../../Shared/Mappers/Interfaces/IUserMapper";
import { CreateEmployeeDto, EmployeeDto } from "../../Shared/Dtos/Employees/IEmployees.dto";

export class EmployeeService implements IEmployeeService {

  constructor(private employeeMapper: IUserMapper) {
  }

  async saveEmployee(employee: CreateEmployeeDto): Promise<EmployeeDto> {
    return Promise.resolve({name: 'Brian', id: 0, password: '', kioskId: 0 });
  }

  async getAllEmployees(): Promise<EmployeeDto[]> {
    return Promise.resolve([{name: 'Brian', id: 0, password: '', kioskId: 0 }]);
  }
}