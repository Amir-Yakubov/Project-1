import { Injectable } from '@nestjs/common';
import {Model} from "nestjs-dynamoose";
import {AssetsPK} from "../ddb/models/AssetsModel";
import {AssetDTO} from "../dto/AssetsDTO";

@Injectable()
export class assetManagerService {
  constructor(
      private readonly assetsModel:Model<AssetDTO, AssetsPK>,
  ) {
  }

  public async getUserAssets(user_id: string){
    return await this.assetsModel.get({user_id})
    }
}
