import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import {LocalStrategy} from "../auth/localStrategy";
import {AuthService} from "../services/authService";
import {ConfigService} from "@nestjs/config";
import {UserController} from "../controllers/userController";
import {UserService} from "../services/userService";
import {DynamoDBModule} from "./DynamoDBModule";

@Module({
    imports: [PassportModule.register({ defaultStrategy: 'local' }), DynamoDBModule],
    providers: [LocalStrategy, AuthService, UserService, ConfigService],
    controllers: [UserController],
})
export class AuthModule {}