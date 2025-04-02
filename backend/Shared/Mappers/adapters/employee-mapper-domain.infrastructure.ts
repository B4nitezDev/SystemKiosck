import { MapperAdapter } from "../types/MapperAdapter";
import { Employee } from "../../../Domain/Entities/Employee";
import { EmployeeModel } from "../../../Infrastructure/Database/Models/EmployeeModel";
import { GenericMapper } from "../GenericMapper";
import { IMapper } from "../Interfaces/IUserMapper";
import { EntityFactory } from "../../../Domain/Factories/EntityConstructor";
import { EmailVo } from "../../../Domain/VOs/email.vo";
import { PhoneNumberVo } from "../../../Domain/VOs/phone-number.vo";

const domainInfrastructureAdapter: MapperAdapter<Employee, EmployeeModel> = {
  createdAt: (source: Employee)  => source.audit.createdAt,
  updatedAt: (source: Employee)  => source.audit.updatedAt,
  createdBy: (source: Employee)  => source.audit.createdBy,
  updatedBy: (source: Employee)  => source.audit.updatedBy,
  email: (source: Employee) => source.email?.GetValue(),
  phone: (source: Employee) => source.phone?.GetValue(),
}

const infrastructureDomainAdapter: MapperAdapter<EmployeeModel, Employee> = {
  email: (source: EmployeeModel) => source.email
    ? EmailVo.Create(source.email)
    : undefined,
  phone: (source: EmployeeModel) => source.phone
    ? PhoneNumberVo.Create(source.phone)
    : undefined,
}

export const employeeMapperDomainInfrastructure: IMapper<Employee, EmployeeModel> =
  new GenericMapper<Employee, EmployeeModel>(domainInfrastructureAdapter);


export const employeeMapperInfrastructureDomain: IMapper<EmployeeModel, Employee> =
  new GenericMapper<EmployeeModel, Employee>(infrastructureDomainAdapter,
    (props) => EntityFactory.FromPersistence(Employee, props));