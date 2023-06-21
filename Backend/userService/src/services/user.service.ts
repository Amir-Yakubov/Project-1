import { Injectable } from '@nestjs/common';
import {UserPK} from "../ddb/models/UserModel";
import {UserDTO} from "../dto/UserDTO";
import {Model} from "nestjs-dynamoose";

@Injectable()
export class UserService {
    constructor(
        private readonly userModel:Model<UserDTO, UserPK>,
    ) {
    }

  public async getUser(user_id: string){
      return await this.userModel.get({user_id});
    }
}
