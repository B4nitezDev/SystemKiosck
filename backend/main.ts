﻿import { App } from "./Presentation/app";

(async (): Promise<void> => {
  const app = App.get()

  const PORT: number = Number(process.env.PORT) || 3000;

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
})();