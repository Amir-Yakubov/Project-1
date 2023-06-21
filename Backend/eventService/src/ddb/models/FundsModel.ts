import { Schema } from "dynamoose";
import { ModelDefinition } from "nestjs-dynamoose";
import { schemaDefaultSetting } from "../common/SchemaDefaultSettings";
import { TABLES } from "../common/Tables";
import { NODE_ENV } from "../../utils/Constans";

export class FundsPK {
  fund_id: string;
}

const BlastOffRacesSchema = new Schema(
  {
    fund_id: { type: String, hashKey: true },
    start_ts: Number,
    finish_ts: Number,
    total_num_of_winners: Number,
    guaranteed_prize_pool: Number,
    cur_prize_pool: Number,
    is_calculating_prize: Boolean,
    prize_distribution: Array<Object>
  },
  schemaDefaultSetting
);

export const FundsModelDefinition: ModelDefinition = {
  name: TABLES.FUNDS,
  schema: BlastOffRacesSchema,
  options: { create: NODE_ENV != "prod" && NODE_ENV != "dev" }
};
