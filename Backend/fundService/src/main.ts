import {NestFactory} from '@nestjs/core';
import {AppModule} from './modules/appModule';
import {ValidationPipe} from "@nestjs/common";
import {APP_PORT} from "./utils/Constants";
import * as cors from 'cors';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe());
    app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));
    await app.listen(APP_PORT);
}

bootstrap();
