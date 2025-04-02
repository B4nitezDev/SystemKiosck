import { App } from "./Presentation/app";
import { initializeDatabase } from "./Infrastructure/Database";
import { container } from "./Shared/DiContainer/DIContainer";
import { Express } from "express";
import { AddRoutesRegister } from "./Shared/DiContainer/registers/add-routes.register";
import { AddControllersRegister } from "./Shared/DiContainer/registers/add-controllers.register";
import { AddServicesRegister } from "./Shared/DiContainer/registers/add-services.register";
import { AddMappersRegister } from "./Shared/DiContainer/registers/add-mappers.register";
import { AddRepositoriesRegister } from "./Shared/DiContainer/registers/add-repositories.register";

(async (): Promise<void> => {
  console.log("Initializing services...");

  AddRepositoriesRegister.addRepositories(container);
  AddMappersRegister.AddMappers(container);
  AddServicesRegister.addServices(container);
  AddControllersRegister.addControllers(container);
  AddRoutesRegister.addRoutes(container);

  console.log("Starting server...");

  await initializeDatabase();

  const app: Express = App.get()

  const PORT: number = Number(process.env.PORT) || 3000;

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
})();