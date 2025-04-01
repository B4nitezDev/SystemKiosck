import { App } from "./Presentation/app";
import { initializeDatabase } from "./Infrastructure/Database";

(async (): Promise<void> => {
  console.log("Starting server...");

  console.log("Load variables", process.env.DB_HOST, process.env.DB_PORT, process.env.DB_DATABASE);

  await initializeDatabase();
  const app = App.get()

  const PORT: number = Number(process.env.PORT) || 3000;

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
})();