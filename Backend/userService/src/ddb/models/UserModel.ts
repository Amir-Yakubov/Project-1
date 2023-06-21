import { Schema } from "dynamoose";
import { ModelDefinition } from "nestjs-dynamoose";
import { schemaDefaultSetting } from "../common/SchemaDefaultSettings";
import { TABLES } from "../common/Tables";
import { NODE_ENV } from "../../utils/Constans";

export class UserPK {
  user_id: string;
}

const BlastOffRacesSchema = new Schema(
  {
    user_id: { type: String, hashKey: true },
  },
  schemaDefaultSetting
);

export const UserModelDefinition: ModelDefinition = {
  name: TABLES.USER,
  schema: BlastOffRacesSchema,
  options: { create: NODE_ENV != "prod" && NODE_ENV != "dev" }
};
