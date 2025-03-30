import { App } from "./Presentation/app";
import { initializeDatabase } from "./Infrastructure/Database";

(async (): Promise<void> => {
  await initializeDatabase();
  const app = App.get()

  const PORT: number = Number(process.env.PORT) || 3000;

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
})();