import { DIContainer } from "../DIContainer";
import { GenericRepository } from "../../../Infrastructure/Database/Repositories/generic-repository";
import { EmployeeModel } from "../../../Infrastructure/Database/Models/EmployeeModel";

export class AddRepositoriesRegister {
  static addRepositories (container: DIContainer) {
    container.registerClass("employeeRepository", GenericRepository, [EmployeeModel]);
  }
}