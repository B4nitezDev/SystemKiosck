import { IEmployee } from '../../../Domain/Interfaces/employee.interface';
import { WithRequired } from "../../Utils/types/TypeHelpers";

export type CreateEmployeeDto =
  WithRequired<Omit<IEmployee, 'id'>, 'name' | 'password' | 'kioskId'>;


export type EmployeeDto = IEmployee;