import {Injectable} from '@nestjs/common';
import {InjectModel, Model} from "nestjs-dynamoose";
import {TABLES} from "../ddb/common/Tables";
import {ProvidentFundDTO} from "../dto/providentFundDTO";
import {ProvidentFundsPK} from "../ddb/models/providentFundsModel";
import {splitArrayIntoBatches} from "../utils/utilFunctions";
import {SortOrder} from "dynamoose/dist/General";
import {FUND_CLASSIFICATION_ENUM} from "../Enum/FUND_CLASSIFICATION_ENUM";
import {SPECIALIZATION_ENUM} from "../Enum/SPECIALIZATION_ENUM";

@Injectable()
export class ProvidentService {
    constructor(
        @InjectModel(TABLES.PROVIDENT_FUNDS)
        private readonly providentFundsModel: Model<ProvidentFundDTO, ProvidentFundsPK>,
    ) {
    }

    public async saveFunds(providentFunds: ProvidentFundDTO[]) {
        const fundsToSave: ProvidentFundDTO[][] = splitArrayIntoBatches(providentFunds, 25);
        try {
            return fundsToSave.map(async (fundsBatch, i) =>
                await this.providentFundsModel.batchPut(fundsBatch));
        } catch (error) {
            console.error('Failed to save pension funds', error);
        }
    }
    public async getTop3() {
        let childrenFundsA: ProvidentFundDTO[];
        let childrenFundsB: ProvidentFundDTO[];
        let childrenFundsC: ProvidentFundDTO[];
        let providentForInvestA: ProvidentFundDTO[];
        let providentForInvestB: ProvidentFundDTO[];
        let providentForInvestC: ProvidentFundDTO[];
        let educationFundsA: ProvidentFundDTO[];
        let educationFundsB: ProvidentFundDTO[];
        let educationFundsC: ProvidentFundDTO[];
        let providentFundsA: ProvidentFundDTO[];
        let providentFundsB: ProvidentFundDTO[];
        let providentFundsC: ProvidentFundDTO[];
        try {
            childrenFundsA = await this.providentFundsModel.query('CURRENT_DATE')
                .eq('2024-03-23T00:00:00')
                .where('FUND_NAME')
                .contains(FUND_CLASSIFICATION_ENUM.CHILDREN_FUND)
                .where('SUB_SPECIALIZATION')
                .contains(SPECIALIZATION_ENUM.INCREASED_RISK)
                .using('YIELD_5_INDEX')
                .sort(SortOrder.descending)
                .exec();

            childrenFundsB = await this.providentFundsModel.query('CURRENT_DATE')
                .eq('2024-03-23T00:00:00')
                .where('FUND_NAME')
                .contains(FUND_CLASSIFICATION_ENUM.CHILDREN_FUND)
                .where('SUB_SPECIALIZATION')
                .contains(SPECIALIZATION_ENUM.MEDIUM_RISK)
                .using('YIELD_5_INDEX')
                .sort(SortOrder.descending)
                .exec();

            childrenFundsC = await this.providentFundsModel.query('CURRENT_DATE')
                .eq('2024-03-23T00:00:00')
                .where('FUND_NAME')
                .contains(FUND_CLASSIFICATION_ENUM.CHILDREN_FUND)
                .where('SUB_SPECIALIZATION')
                .contains(SPECIALIZATION_ENUM.LITTLE_RISK)
                .using('YIELD_5_INDEX')
                .sort(SortOrder.descending)
                .exec();

            providentForInvestA = await this.providentFundsModel.query('CURRENT_DATE')
                .eq('2024-03-23T00:00:00')
                .where('FUND_CLASSIFICATION')
                .eq(FUND_CLASSIFICATION_ENUM.PROVIDENT_FUND_FOR_INVESTMENT)
                .where('SPECIALIZATION')
                .contains(SPECIALIZATION_ENUM.STOCKS)
                .using('YIELD_5_INDEX')
                .sort(SortOrder.descending)
                .exec();

            providentForInvestB = await this.providentFundsModel.query('CURRENT_DATE')
                .eq('2024-03-23T00:00:00')
                .where('FUND_CLASSIFICATION')
                .eq(FUND_CLASSIFICATION_ENUM.PROVIDENT_FUND_FOR_INVESTMENT)
                .where('SPECIALIZATION')
                .contains(SPECIALIZATION_ENUM.GENERAL)
                .using('YIELD_5_INDEX')
                .sort(SortOrder.descending)
                .exec();

            providentForInvestC = await this.providentFundsModel.query('CURRENT_DATE')
                .eq('2024-03-23T00:00:00')
                .where('FUND_CLASSIFICATION')
                .eq(FUND_CLASSIFICATION_ENUM.PROVIDENT_FUND_FOR_INVESTMENT)
                .where('SPECIALIZATION')
                .contains(SPECIALIZATION_ENUM.BONDS)
                .using('YIELD_5_INDEX')
                .sort(SortOrder.descending)
                .exec();

            educationFundsA = await this.providentFundsModel.query('CURRENT_DATE')
                .eq('2024-03-23T00:00:00')
                .where('FUND_CLASSIFICATION')
                .eq(FUND_CLASSIFICATION_ENUM.EDUCATION_FUND)
                .where('SPECIALIZATION')
                .eq(SPECIALIZATION_ENUM.STOCKS)
                .using('YIELD_5_INDEX')
                .sort(SortOrder.descending)
                .exec();

            educationFundsB = await this.providentFundsModel.query('CURRENT_DATE')
                .eq('2024-03-23T00:00:00')
                .where('FUND_CLASSIFICATION')
                .eq(FUND_CLASSIFICATION_ENUM.EDUCATION_FUND)
                .where('SPECIALIZATION')
                .eq(SPECIALIZATION_ENUM.GENERAL)
                .using('YIELD_5_INDEX')
                .sort(SortOrder.descending)
                .exec();

            educationFundsC = await this.providentFundsModel.query('CURRENT_DATE')
                .eq('2024-03-23T00:00:00')
                .where('FUND_CLASSIFICATION')
                .eq(FUND_CLASSIFICATION_ENUM.EDUCATION_FUND)
                .where('SPECIALIZATION')
                .eq(SPECIALIZATION_ENUM.BONDS)
                .using('YIELD_5_INDEX')
                .sort(SortOrder.descending)
                .exec();

            providentFundsA = await this.providentFundsModel.query('CURRENT_DATE')
                .eq('2024-03-23T00:00:00')
                .where('FUND_CLASSIFICATION')
                .eq(FUND_CLASSIFICATION_ENUM.PROVIDENT_FUND)
                .where('SPECIALIZATION')
                .eq(SPECIALIZATION_ENUM.STOCKS)
                .using('YIELD_5_INDEX')
                .sort(SortOrder.descending)
                .exec();

            providentFundsB = await this.providentFundsModel.query('CURRENT_DATE')
                .eq('2024-03-23T00:00:00')
                .where('FUND_CLASSIFICATION')
                .eq(FUND_CLASSIFICATION_ENUM.PROVIDENT_FUND)
                .where('SPECIALIZATION')
                .eq(SPECIALIZATION_ENUM.GENERAL)
                .using('YIELD_5_INDEX')
                .sort(SortOrder.descending)
                .exec();

            providentFundsC = await this.providentFundsModel.query('CURRENT_DATE')
                .eq('2024-03-23T00:00:00')
                .where('FUND_CLASSIFICATION')
                .eq(FUND_CLASSIFICATION_ENUM.PROVIDENT_FUND)
                .where('SPECIALIZATION')
                .eq(SPECIALIZATION_ENUM.BONDS)
                .using('YIELD_5_INDEX')
                .sort(SortOrder.descending)
                .exec();

        } catch (error) {
            console.error('Failed to get provident funds', error);
        }
        return [
            [childrenFundsA.slice(0, 3), childrenFundsB.slice(0, 3), childrenFundsC.slice(0, 3)],
            [providentForInvestA.slice(0, 3), providentForInvestB.slice(0, 3), providentForInvestC.slice(0, 3)],
            [educationFundsA.slice(0, 3), educationFundsB.slice(0, 3), educationFundsC.slice(0, 3)],
            [providentFundsA.slice(0, 3), providentFundsB.slice(0, 3), providentFundsC.slice(0, 3)]
        ]
    }
}
