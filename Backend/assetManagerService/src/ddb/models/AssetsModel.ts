import { Schema } from "dynamoose";
import { ModelDefinition } from "nestjs-dynamoose";
import { schemaDefaultSetting } from "../common/SchemaDefaultSettings";
import { TABLES } from "../common/Tables";
import { NODE_ENV } from "../../utils/Constans";

export class AssetsPK {
  user_id: string;
}

const BlastOffRacesSchema = new Schema(
  {
    user_id: { type: String, hashKey: true },
    fund_id: String,
    amount: Number,
    entry_date: Number,
    maturity_date: Number
  },
  schemaDefaultSetting
);

export const AssetsModelDefinition: ModelDefinition = {
  name: TABLES.ASSET,
  schema: BlastOffRacesSchema,
  options: { create: NODE_ENV != "prod" && NODE_ENV != "dev" }
};
