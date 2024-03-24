import {Injectable} from '@nestjs/common';
import {InjectModel, Model} from "nestjs-dynamoose";
import {TABLES} from "../ddb/common/Tables";
import {InsuranceFundsPK} from "../ddb/models/insuranceFundsModel";
import {InsuranceFundDTO} from "../dto/insuranceFundDTO";
import {splitArrayIntoBatches} from "../utils/utilFunctions";
import {SortOrder} from "dynamoose/dist/General";
import {SPECIALIZATION_ENUM} from "../Enum/SPECIALIZATION_ENUM";

@Injectable()
export class InsuranceService {

    constructor(
        @InjectModel(TABLES.INSURANCE_FUNDS)
        private readonly insuranceFundsModel: Model<InsuranceFundDTO, InsuranceFundsPK>,
    ) {
    }

    public async saveFunds(insuranceFunds: InsuranceFundDTO[]) {
        const fundsToSave: InsuranceFundDTO[][] = splitArrayIntoBatches(insuranceFunds, 25);
        try {
            return fundsToSave.map(async fundsBatch =>
                await this.insuranceFundsModel.batchPut(fundsBatch));
        } catch (error) {
            console.error('Failed to save pension funds', error);
        }
    }

    public async getTop3() {
        let insuranceFundsA: InsuranceFundDTO[];
        let insuranceFundsB: InsuranceFundDTO[];
        let insuranceFundsC: InsuranceFundDTO[];
        try {
            insuranceFundsA = await this.insuranceFundsModel.query('CURRENT_DATE')
                .eq('3/14/2024 12:00:00 AM')
                .where('FUND_NAME')
                .contains(SPECIALIZATION_ENUM.STOCKS)
                .using('YIELD_5_INDEX')
                .sort(SortOrder.descending)
                .exec();

            insuranceFundsB = await this.insuranceFundsModel.query('CURRENT_DATE')
                .eq('3/14/2024 12:00:00 AM')
                .where('FUND_NAME')
                .contains(SPECIALIZATION_ENUM.GENERAL)
                .using('YIELD_5_INDEX')
                .sort(SortOrder.descending)
                .exec();

            insuranceFundsC = await this.insuranceFundsModel.query('CURRENT_DATE')
                .eq('3/14/2024 12:00:00 AM')
                .where('FUND_NAME')
                .contains(SPECIALIZATION_ENUM.BONDS)
                .using('YIELD_5_INDEX')
                .sort(SortOrder.descending)
                .exec();

        } catch (error) {
            console.error('Failed to get insurance funds', error);
        }
        return [[insuranceFundsA.slice(0, 3), insuranceFundsB.slice(0, 3), insuranceFundsC.slice(0, 3)]];
    }
}
