import { App } from "./Presentation/app";
import { initializeDatabase } from "./Infrastructure/Database";
import { container } from "./Shared/DiContainer/DIContainer";
import { userMapper } from "./Shared/Mappers/adapters/UserMapper";
import { TYPES } from "./Shared/DiContainer/Tokens/Mappers/UserMapper.token";
import { Express } from "express";
import { EmployeeController, IEmployeeController } from "./Presentation/Controller/EmployeeController";
import { IndexRoutes } from "./Presentation/Routes/index.routes";

(async (): Promise<void> => {
  console.log("Initializing services...");

  //Mappers
  container.registerFactory(TYPES.IUSER_MAPPER, () => userMapper);

  // Controllers
  container.registerClass<IEmployeeController>(EmployeeController, EmployeeController);

  // Services

  // Routes
  container.registerClass(IndexRoutes, IndexRoutes, [EmployeeController]);

  console.log("Starting server...");

  await initializeDatabase();

  const app: Express = App.get()

  const PORT: number = Number(process.env.PORT) || 3000;

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
})();