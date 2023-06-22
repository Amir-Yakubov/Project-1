import {Body, Controller, Get, Param, Post, Put} from '@nestjs/common';
import {UserService} from "../services/userService";
import {UserDTO} from "../dto/UserDTO";
import {UserCredentialsDTO} from "../dto/UserCredentialsDTO";

@Controller('user_service/')
export class UserController {
    constructor(private userService: UserService) {
    }

    @Post('signup')
    public async signup(@Body() user: UserDTO) {
        return await this.userService.signup(user);
    }

    @Put('login/:user_id')
    public async login(
        @Param('user_id') user_id: string,
        @Body() use_credentials: UserCredentialsDTO) {
        return await this.userService.login(user_id, use_credentials);
    }

    @Get('user/:user_id')
    public async getUser(@Param('user_id') user_id: string) {
        return await this.userService.getUser(user_id);
    }
}
