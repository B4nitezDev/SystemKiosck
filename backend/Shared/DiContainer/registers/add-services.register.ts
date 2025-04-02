import { container, DIContainer } from "../DIContainer";
import { IEmployeeService } from "../../../Application/Interfaces/IEmployeeService";
import { EmployeeService } from "../../../Application/Services/EmployeeService";
import { TYPES } from "../Tokens/Mappers/employee-mappers.token";

export class AddServicesRegister {
  static addServices (container: DIContainer): void{
    container.registerClass<IEmployeeService>(EmployeeService, EmployeeService, [TYPES.IUSER_MAPPER])
  }
}