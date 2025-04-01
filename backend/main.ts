import { App } from "./Presentation/app";
import { initializeDatabase } from "./Infrastructure/Database";
import { container } from "./Shared/DiContainer/DIContainer";
import { userMapper } from "./Shared/Mappers/adapters/UserMapper";
import { TYPES } from "./Shared/DiContainer/Tokens/Mappers/UserMapper.token";
import { Express } from "express";

(async (): Promise<void> => {
  console.log("Initializing services...");

  container.register(TYPES.IUSER_MAPPER, () => userMapper);

  console.log("Starting server...");

  await initializeDatabase();

  const app: Express = App.get()

  const PORT: number = Number(process.env.PORT) || 3000;

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
})();