import express, { Express } from "express";
import { container } from "../Shared/DiContainer/DIContainer";
import { IndexRoutes } from "./Routes/index.routes";

export abstract class App {
  private static app: Express | null = null;

  constructor() {}

  private static build(): Express {
    this.app = express();

    const indexRoutes: unknown = container.resolve(IndexRoutes);
    // @ts-ignore
    this.app.use("/api", indexRoutes.routes);


    return this.app;
  }

  public static get(): Express {
    return this.app ?? this.build();
  }
}