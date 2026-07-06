import type { INestApplication } from "@nestjs/common";
import { Test } from "@nestjs/testing";
import { describe, expect, it, beforeAll, afterAll } from "vitest";
import { AppModule } from "./app.module.js";
import { HealthController } from "./health.controller.js";

describe("Fit Studio API smoke", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({ imports: [AppModule] }).compile();
    app = moduleRef.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it("returns health status", () => {
    const healthController = app.get(HealthController);
    expect(healthController.getHealth()).toEqual({ status: "ok", service: "fit-studio-api" });
  });
});
