import { container, DIContainer } from "../DIContainer";
import { TYPES } from "../Tokens/Mappers/UserMapper.token";
import { userMapper } from "../../Mappers/adapters/UserMapper";

export class AddMappersRegister {
  static AddMappers (container: DIContainer): void{
    container.registerFactory(TYPES.IUSER_MAPPER, () => userMapper);
  }
}