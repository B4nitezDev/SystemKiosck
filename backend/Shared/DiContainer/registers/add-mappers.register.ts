import { container, DIContainer } from "../DIContainer";
import { TYPES } from "../Tokens/Mappers/employee-mappers.token";
import { employeeMapperDomainInfrastructure } from "../../Mappers/adapters/employee-mapper-domain.infrastructure";

export class AddMappersRegister {
  static AddMappers (container: DIContainer): void{
    container.registerFactory(TYPES.EMPLOYEE_MAPPER_DOMAIN_INFRASTRUCTURE, () => employeeMapperDomainInfrastructure);
    container.registerFactory(TYPES.EMPLOYEE_MAPPER_INFRASTRUCTURE_DOMAIN, () => employeeMapperDomainInfrastructure);
  }
}