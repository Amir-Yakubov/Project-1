import {Inject, Injectable} from '@nestjs/common';
import {UserServiceAdapter} from "../adapters/userServiceAdapter";

@Injectable()
export class AdminService {
    constructor(
        @Inject(UserServiceAdapter)
        private userServiceAdapter:UserServiceAdapter
    ) {
    }

    public async setUserAsBlackListed(user_id){
        return await this.userServiceAdapter.setUserAsBlackListed(user_id);
    }
}
