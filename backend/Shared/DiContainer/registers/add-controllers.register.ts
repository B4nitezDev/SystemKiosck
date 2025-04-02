import { DIContainer } from "../DIContainer";
import { EmployeeController, IEmployeeController } from "../../../Presentation/Controller/EmployeeController";
import { EmployeeService } from "../../../Application/Services/EmployeeService";

export class AddControllersRegister {
  static addControllers (container: DIContainer): void{
    container.registerClass<IEmployeeController>(EmployeeController, EmployeeController, [EmployeeService]);
  }
}