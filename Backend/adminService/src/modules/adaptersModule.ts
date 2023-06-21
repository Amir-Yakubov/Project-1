import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import {UserServiceAdapter} from "../adapters/userServiceAdapter";

const providers = [UserServiceAdapter];

@Module({
    imports: [HttpModule],
    exports: providers,
    providers: providers,
})
export class AdaptersModule {}
