import { Module } from '@nestjs/common';
import { AssetManagerController } from '../controllers/assetManagerController';
import { assetManagerService } from "../services/assetManagerService";
import { HttpModule } from "@nestjs/axios";
import { DynamoDBModule } from "./DynamoDBModule";

@Module({
  imports: [HttpModule, DynamoDBModule],
  controllers: [AssetManagerController],
  providers: [assetManagerService],
})

export class AppModule {}
