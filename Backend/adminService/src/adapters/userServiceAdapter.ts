import {HttpService} from "@nestjs/axios";
import {lastValueFrom} from "rxjs";
import {USER_SERVICE_URL} from "../utils/Constans";
import {HttpException} from "@nestjs/common";

export class UserServiceAdapter {
    constructor(
        private httpService: HttpService
    ) {
    }

    public async setUserAsBlackListed(user_id){
        try {
            const { data } = await lastValueFrom(
                this.httpService.post(USER_SERVICE_URL + 'black_list' + user_id));
            return data.data;
        } catch (error) {
            throw new HttpException(error.response.data.errorMessage, error.response.status);
        }
    }
}