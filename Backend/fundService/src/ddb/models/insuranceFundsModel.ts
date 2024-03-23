import {Schema} from 'dynamoose';
import {ModelDefinition} from 'nestjs-dynamoose';
import {schemaDefaultSetting} from '../common/SchemaDefaultSettings';
import {TABLES} from '../common/Tables';
import {NODE_ENV} from '../../utils/Constants';

export class InsuranceFundsPK {
    CURRENT_DATE: string;
    _id: string;
}

const insuranceFundsSchema = new Schema(
    {
        CURRENT_DATE: {
                type: String,
                hashKey: true,
                index: {
                        name: 'YIELD_5_INDEX',
                        type: 'global',
                        project: true,
                        rangeKey: 'YIELD_TRAILING_5_YRS'
                },
        },
        _id: {type: String, rangeKey: true},
        FUND_ID: String,
        FUND_NAME: String,
        PARENT_COMPANY_ID: String,
        PARENT_COMPANY_NAME: String,
        FUND_CLASSIFICATION: String,
        REPORT_PERIOD: String,
        TOTAL_ASSETS: String,
        AVG_ANNUAL_MANAGEMENT_FEE: String,
        AVG_DEPOSIT_FEE: String,
        MONTHLY_YIELD: String,
        YEAR_TO_DATE_YIELD: String,
        YIELD_TRAILING_3_YRS: String,
        YIELD_TRAILING_5_YRS: String,
        AVG_ANNUAL_YIELD_TRAILING_3YRS: String,
        AVG_ANNUAL_YIELD_TRAILING_5YRS: String,
        STANDARD_DEVIATION: String,
        ALPHA: String,
        SHARPE_RATIO: String,
        LIQUID_ASSETS_PERCENT: String,
        STOCK_MARKET_EXPOSURE: String,
        FOREIGN_EXPOSURE: String,
        FOREIGN_CURRENCY_EXPOSURE: String,
        PARENT_COMPANY_LEGAL_ID: String,
    },
    schemaDefaultSetting
);

export const insuranceFundsModelDefinition: ModelDefinition = {
    name: TABLES.INSURANCE_FUNDS,
    schema: insuranceFundsSchema,
    options: {create: NODE_ENV != 'prod' && NODE_ENV != 'dev'}
};
