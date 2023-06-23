import {Body, Controller, Get, Param, Post, Put} from '@nestjs/common';
import {UserService} from "../services/userService";
import {UserCredentialsDTO} from "../dto/UserCredentialsDTO";
import {UserSignupInfoDTO} from "../dto/UserSignupDTO";

@Controller('user_service/')
export class UserController {
    constructor(private userService: UserService) {
    }

    @Post('signup')
    public async signup(@Body() userSignupInfo: UserSignupInfoDTO) {
        return await this.userService.signup(userSignupInfo);
    }

    @Put('login/:user_id')
    public async login(
        @Param('user_id') user_id: string,
        @Body() use_credentials: UserCredentialsDTO) {
        return await this.userService.login(user_id, use_credentials);
    }

    @Put('update_user/:user_id')
    public async updateUser(
        @Param('user_id') user_id: string,
        @Body() updateObject) {
        return await this.userService.updateUser(user_id, updateObject);
    }

    @Get('user/:user_id')
    public async getUser(@Param('user_id') user_id: string) {
        return await this.userService.getUser(user_id);
    }
}
