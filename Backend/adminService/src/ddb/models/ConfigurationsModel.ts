import {Schema} from "dynamoose";
import {ModelDefinition} from "nestjs-dynamoose";
import {schemaDefaultSetting} from "../common/SchemaDefaultSettings";
import {TABLES} from "../common/Tables";
import {NODE_ENV} from "../../utils/Constans";

export class ConfigurationPK {
    country: string;
}

const ConfigurationsSchema = new Schema(
    {
        country: {type: String, hashKey: true},
    },
    schemaDefaultSetting
);

export const ConfigurationModelDefinition: ModelDefinition = {
    name: TABLES.CONFIGURATIONS,
    schema: ConfigurationsSchema,
    options: {create: NODE_ENV != "prod" && NODE_ENV != "dev"}
};
