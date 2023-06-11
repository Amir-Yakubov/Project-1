import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { GemelnetService } from "../services/GemelnetService";
import { HttpModule } from "@nestjs/axios";
import { AdaptersModule } from "./adaptersModule";

@Module({
  imports: [HttpModule, AdaptersModule],
  controllers: [AppController],
  providers: [GemelnetService],
})

export class AppModule {}
