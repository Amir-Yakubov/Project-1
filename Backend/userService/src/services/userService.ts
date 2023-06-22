import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {UserPK} from "../ddb/models/UserModel";
import {UserDTO} from "../dto/UserDTO";
import {InjectModel, Model} from "nestjs-dynamoose";
import {TABLES} from "../ddb/common/Tables";
import {UserCredentialsDTO} from "../dto/UserCredentialsDTO";

@Injectable()
export class UserService {
    constructor(
        @InjectModel(TABLES.USER)
        private readonly userModel: Model<UserDTO, UserPK>,
    ) {
    }

    public async getUser(user_id: string) {
        return await this.userModel.get({user_id: user_id});
    }

    public async login(user_id: string, user_credentials: UserCredentialsDTO) {
        await this.validateUser(user_id, user_credentials);
        const currTime: number = Date.now();
        return await this.userModel.update({user_id}, {last_login: currTime});
    }

    public async signup(user: UserDTO) {
        const userFromDB: UserDTO = await this.getUser(user.user_id);
        if (userFromDB) throw new HttpException('user already exists', HttpStatus.BAD_REQUEST);
        else return await this.userModel.create(user);
    }

    public async validateUser(user_id: string, use_credentials: UserCredentialsDTO) {
        console.log(`New login request ${use_credentials.username}, ${user_id}`);
        const user = await this.getUser(user_id);
        if (!user) throw new HttpException('Failed to find user', HttpStatus.BAD_REQUEST)
        if (user.is_blacklisted) throw new HttpException('User blacklisted', HttpStatus.UNAUTHORIZED);
        if (user.password === use_credentials.password && user.user_name === use_credentials.username) {
            console.log(`${use_credentials.username} login successfully`);
            return true;
        } else {
            return null;
        }
    }
}
