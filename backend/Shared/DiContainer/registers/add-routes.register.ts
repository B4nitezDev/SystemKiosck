import { container, DIContainer } from "../DIContainer";
import { EmployeeRoutes } from "../../../Presentation/Routes/employee.routes";
import { EmployeeController } from "../../../Presentation/Controller/EmployeeController";
import { IndexRoutes } from "../../../Presentation/Routes/index.routes";

export class AddRoutesRegister {
  static addRoutes (container: DIContainer): void{
    container.registerClass(EmployeeRoutes, EmployeeRoutes, [EmployeeController]);
    container.registerClass(IndexRoutes, IndexRoutes, [EmployeeRoutes]);
  }
}