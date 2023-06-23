import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {InjectModel, Model} from "nestjs-dynamoose";
import {AssetsPK} from "../ddb/models/AssetsModel";
import {AssetDTO} from "../dto/AssetsDTO";
import {AssetResponseDTO} from "../dto/AssetResponseDTO";
import {TABLES} from "../ddb/common/Tables";

@Injectable()
export class assetManagerService {
    constructor(
        @InjectModel(TABLES.ASSET)
        private readonly assetsModel: Model<AssetDTO, AssetsPK>,
    ) {
    }

    public async getUserAssets(user_id: string) {
        let assets: AssetDTO[];
        try {
            assets = await this.assetsModel.query('user_id').eq(user_id).exec();
            if (!assets || assets.length <= 0) new HttpException('user have no assets', HttpStatus.NOT_FOUND);
        } catch (error) {
            throw new HttpException(`Failed to get user assets ${error}`, HttpStatus.BAD_REQUEST);
        }
        return assets;
    }

    public async createAsset(asset: AssetDTO) {
        let newAssetFromDB: AssetDTO;
        try {
            newAssetFromDB = await this.assetsModel.create(asset);
            return new AssetResponseDTO(
                newAssetFromDB.user_id, newAssetFromDB.fund_id, newAssetFromDB.amount,
                newAssetFromDB.entry_date, newAssetFromDB.maturity_date);
        } catch (error) {
            throw new HttpException(`Failed to create new asset ${error}`, HttpStatus.BAD_REQUEST);
        }
    }

    public async updateAsset(user_id: string, fund_id: string, updateObject: Object) {
        let updatedAssetFromDB: AssetDTO;
        try {
            updatedAssetFromDB = await this.assetsModel.update({user_id, fund_id}, updateObject);
            return new AssetResponseDTO(
                updatedAssetFromDB.user_id, updatedAssetFromDB.fund_id, updatedAssetFromDB.amount,
                updatedAssetFromDB.entry_date, updatedAssetFromDB.maturity_date);
        } catch (error) {
            throw new HttpException(`Failed to update asset ${fund_id}`, HttpStatus.BAD_REQUEST);
        }
    }

    public async deleteAsset(user_id: string, fund_id: string) {
        try {
            return await this.assetsModel.delete({user_id, fund_id});
        } catch (error) {
            throw new HttpException(`Failed to delete asset user_id:${user_id}, fund_id:${fund_id}`,
                HttpStatus.BAD_REQUEST);
        }
    }

    public async deleteAssets(user_id: string) {
        let assets: AssetDTO[];
        try {
            assets = await this.assetsModel.query('user_id').eq(user_id).exec();
            if (assets.length > 0) {
                return await this.assetsModel.batchDelete(assets);
            } else {
                new HttpException('user have no assets', HttpStatus.NOT_FOUND);
            }
        } catch (error) {
            throw new HttpException(`Failed to delete asset user_id:${user_id}`,
                HttpStatus.BAD_REQUEST);
        }
    }
}
