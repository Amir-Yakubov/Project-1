import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import {AdminController} from "../controllers/adminController";
import {LocalStrategy} from "../auth/localStrategy";
import {AuthService} from "../services/authService";
import {AdminService} from "../services/adminService";
import {AdaptersModule} from "./adaptersModule";
import {ConfigService} from "@nestjs/config";

@Module({
    imports: [PassportModule.register({ defaultStrategy: 'local' }), AdaptersModule],
    providers: [LocalStrategy, AuthService, AdminService, ConfigService],
    controllers: [AdminController],
})
export class AuthModule {}