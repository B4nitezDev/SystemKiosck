import { MapperAdapter } from "../types/MapperAdapter";
import { Employee } from "../../../Domain/Entities/Employee";
import { EmployeeModel } from "../../../Infrastructure/Database/Models/EmployeeModel";
import { GenericMapper } from "../GenericMapper";
import { IMapper } from "../Interfaces/IUserMapper";


const adapter: MapperAdapter<Employee, EmployeeModel> = {
  createdAt: (source: Employee)  => new Date(source.audit.createdAt)
}

export const userMapper: IMapper<Employee, EmployeeModel> = new GenericMapper<Employee, EmployeeModel>(adapter);
