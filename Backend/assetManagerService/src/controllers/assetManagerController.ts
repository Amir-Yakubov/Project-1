import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {assetManagerService} from "../services/assetManagerService";
import {AssetDTO} from "../dto/AssetsDTO";

@Controller('asset_manager_service/')
export class AssetManagerController {
    constructor(private assetManagerService: assetManagerService) {
    }

    @Get('assets/:user_id')
    public async getUserAssets(@Param('user_id') user_id: string) {
        return await this.assetManagerService.getUserAssets(user_id);
    }

    @Post('create_asset')
    public async createAsset(@Body() asset: AssetDTO) {
        return await this.assetManagerService.createAsset(asset);
    }

    @Put('update_asset/:user_id/:fund_id')
    public async updateAsset(@Param('user_id') user_id: string,
                             @Param('fund_id') fund_id: string,
                             @Body() updateObject: Object) {
        return await this.assetManagerService.updateAsset(user_id, fund_id, updateObject);
    }

    @Delete('delete_asset/:user_id/:fund_id')
    public async deleteAsset(@Param('user_id') user_id: string,
                             @Param('fund_id') fund_id: string) {
        return await this.assetManagerService.deleteAsset(user_id, fund_id);
    }

    @Delete('delete_assets/:user_id')
    public async deleteAssets(@Param('user_id') user_id: string) {
        return await this.assetManagerService.deleteAssets(user_id);
    }
}
