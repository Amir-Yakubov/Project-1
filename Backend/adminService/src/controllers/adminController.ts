import {Controller, Get, Param, Post, UseGuards} from '@nestjs/common';
import {AuthGuard} from '@nestjs/passport';
import {AdminService} from "../services/adminService";

@Controller('admin_service/admin')
export class AdminController {
    constructor(
        private adminService: AdminService
    ) {
    }

    @Get('configurations/:country_code')
    @UseGuards(AuthGuard('local')) // USERNAME & PASSWORD as body params
    public async getConfigurations(@Param('country_code') country_code: string) {
        return await this.adminService.getConfigurations(country_code);
    }

    @Post('black_list')
    @UseGuards(AuthGuard('local'))
    public async setUserAsBlackListed(@Param('user_id') user_id: string) {
        await this.adminService.setUserAsBlackListed(user_id);
    }
}
