import {ProvidenFundService} from "../services/providenFundService";
import * as process from "process";

export const NODE_ENV = process.env.NODE_ENV ?? 'local';
export const AWS_REGION = process.env.AWS_REGION ?? 'eu-central-1';
export const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID ?? 'test';
export const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY ?? 'test';
export const AWS_ENDPOINT = process.env.AWS_ENDPOINT ?? '';
export const APP_PORT = process.env.APP_PORT ?? '3004';
export const GOVERNMENT_BASE_URL = process.env.GOVERNMENT_BASE_URL ?? 'https://data.gov.il/api/3/action/datastore_search'
export const PENSION_RESOURCE_ID = process.env.PENSION_RESOURCE_ID ?? '?resource_id=6d47d6b5-cb08-488b-b333-f1e717b1e1bd'
export const PROVIDEN_FUND_RESOURCE_ID = process.env.PROVIDEN_FUND_RESOURCE_ID ?? '?resource_id=a30dcbea-a1d2-482c-ae29-8f781f5025fb'
export const INSURANCE_RESOURCE_ID = process.env.INSURANCE_RESOURCE_ID ?? '?resource_id=c6c62cc7-fe02-4b18-8f3e-813abfbb4647'