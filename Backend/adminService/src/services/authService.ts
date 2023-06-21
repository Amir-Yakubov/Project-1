import { Injectable } from '@nestjs/common';
import {ConfigService} from "@nestjs/config";

@Injectable()
export class AuthService {
    constructor(private configService: ConfigService) {
    }
    public validateAuth(username: string, password: string){
        const USERNAME =  this.configService.get('USERNAME');
        const PASSWORD =  this.configService.get('PASSWORD');
        console.log({USERNAME, PASSWORD});
        if (username === USERNAME && password === PASSWORD) {
            console.log({username}, `${username} pass validation`);
            return true;
        } else return false;
    }
}