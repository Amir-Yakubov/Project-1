import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import {UserPK} from "../ddb/models/UserModel";
import {UserDTO} from "../dto/UserDTO";
import {InjectModel, Model} from "nestjs-dynamoose";
import {TABLES} from "../ddb/common/Tables";
import {UserCredentialsDTO} from "../dto/UserCredentialsDTO";
import {v4 as uuidv4} from 'uuid';
import {DEFUALT_AVATAR_IMG_URL} from "../utils/Constans";
import {UserSignupInfoDTO} from "../dto/UserSignupDTO";
import {UserResponseDTO} from "../dto/UserResponseDTO";

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
        const updatedUserFromDB = await this.userModel.update({user_id}, {last_login: currTime});
        return new UserResponseDTO(updatedUserFromDB.user_id, updatedUserFromDB.user_name,
            updatedUserFromDB.email, updatedUserFromDB.avatar_img_url, updatedUserFromDB.last_login);
    }

    public async signup(userSignupInfo: UserSignupInfoDTO) {
        const user_id = uuidv4();
        const emailStr = userSignupInfo.email.split("@");
        const username = emailStr[0];
        const user: UserDTO = new UserDTO(user_id, username, userSignupInfo.password,
            userSignupInfo.email, DEFUALT_AVATAR_IMG_URL, false, 0);
        const newUserFromDB =  await this.userModel.create(user);
        return new UserResponseDTO(newUserFromDB.user_id, newUserFromDB.user_name,
            newUserFromDB.email, newUserFromDB.avatar_img_url, newUserFromDB.last_login);
    }

    public async updateUser(user_id: string, updateObject){
        const updatedUserFromDB = await this.userModel.update({user_id}, updateObject);
        return new UserResponseDTO(updatedUserFromDB.user_id, updatedUserFromDB.user_name,
            updatedUserFromDB.email, updatedUserFromDB.avatar_img_url, updatedUserFromDB.last_login);
    }

    private async validateUser(user_id: string, use_credentials: UserCredentialsDTO) {
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
