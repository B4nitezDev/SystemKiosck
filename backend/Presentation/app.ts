import express, { Express } from "express";

export abstract class App {
  private static app: Express | null = null;

  constructor() {}

  private static build(): Express {
    this.app = express();


    return this.app;
  }

  public static get(): Express {
    return this.app ?? this.build();
  }
}