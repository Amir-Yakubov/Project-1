import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/appModule';
import { ValidationPipe } from "@nestjs/common";
import { APP_PORT } from "./utils/Constans";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(APP_PORT);
}
bootstrap();
