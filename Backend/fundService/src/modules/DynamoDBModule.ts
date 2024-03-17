import { Module } from '@nestjs/common';
import { DynamooseModule, ModelDefinition } from 'nestjs-dynamoose';
import * as schemas from '../ddb/models';
import { AWS_ACCESS_KEY_ID, AWS_ENDPOINT, AWS_REGION, AWS_SECRET_ACCESS_KEY } from "../utils/Constants";

const models: ModelDefinition[] = Object.values(schemas).map(
  (schema) => schema,
);

const awsSettings = {
  aws: {
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
    region: AWS_REGION,
  },
  local: AWS_ENDPOINT,
};

if (!AWS_ENDPOINT) {
  delete awsSettings.local;
}

const providers = [
  DynamooseModule.forRoot(awsSettings),
  DynamooseModule.forFeature(models),
];

@Module({
  exports: providers,
  imports: providers,
})
export class DynamoDBModule {}
