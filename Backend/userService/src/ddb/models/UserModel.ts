import {Schema} from "dynamoose";
import {ModelDefinition} from "nestjs-dynamoose";
import {schemaDefaultSetting} from "../common/SchemaDefaultSettings";
import {TABLES} from "../common/Tables";
import {NODE_ENV} from "../../utils/Constans";

export class UserPK {
    user_id: string;
}

const UserSchema = new Schema(
    {
        user_id: {type: String, hashKey: true},
        user_name: String,
        password: String,
        email: String,
        avatar_img_url: String,
        blacklisted: Boolean,
        last_login: Number
    },
    schemaDefaultSetting
);

export const UserModelDefinition: ModelDefinition = {
    name: TABLES.USER,
    schema: UserSchema,
    options: {create: NODE_ENV != "prod" && NODE_ENV != "dev"}
};
