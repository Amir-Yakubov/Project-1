import {Inject, Injectable} from '@nestjs/common';
import {UserServiceAdapter} from "../adapters/userServiceAdapter";

@Injectable()
export class AdminService {
    constructor(
        @Inject(UserServiceAdapter)
        private userServiceAdapter:UserServiceAdapter
    ) {
    }

    public async setUserAsBlackListed(user_id: string){
        return await this.userServiceAdapter.setUserAsBlackListed(user_id);
    }

    public async getConfigurations(country_code: string) {
        console.log({country_code}, 'Received new get configurations request');
        return `Masho Masho ${country_code}`;
    }
}
