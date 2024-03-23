import {Injectable} from '@nestjs/common';
import {PensionFundDTO} from "../dto/pensionFundDTO";
import {InjectModel, Model} from "nestjs-dynamoose";
import {TABLES} from "../ddb/common/Tables";
import {PensionFundsPK} from "../ddb/models/pensionFundsModel";
import {splitArrayIntoBatches} from "../utils/utilFunctions";
import {SortOrder} from 'dynamoose/dist/General';

@Injectable()
export class PensionService {
    constructor(
        @InjectModel(TABLES.PENSION_FUNDS)
        private readonly pensionFundsModel: Model<PensionFundDTO, PensionFundsPK>,
    ) {
    }

    public async loadFunds() {
        return this.pensionFundsModel.query('CURRENT_DATE')
            .eq('3/14/2024 12:00:00 AM')
            .where('FUND_NAME')
            .contains('לבני 50 ומטה')
            .where('FUND_CLASSIFICATION')
            .eq("קרנות חדשות")
            .using('YIELD_5_INDEX')
            .sort(SortOrder.descending)
            .limit(3)
            .exec();
    };
    public async saveFunds(pensionFunds: PensionFundDTO[]) {
        const fundsToSave: PensionFundDTO[][] = splitArrayIntoBatches(pensionFunds, 25);
        try {
            return fundsToSave.map(async fundsBatch =>
                await this.pensionFundsModel.batchPut(fundsBatch));
        } catch (error) {
            console.error('Failed to save pension funds', error);
        }
    }

    // public async getData(FUND_CLASSIFICATION: FUND_CLASSIFICATION_ENUM, SPECIALIZATION: SUB_SPECIALIZATION_ENUM) {
    //     const {data} = await axios.get(
    //         GOVERNMENT_BASE_URL + RESOURCE_ID_ENUM.PENSION_RESOURCE_ID + `&q=${FUND_CLASSIFICATION}` + `&q=${SPECIALIZATION}`);
    //     data.result.records.sort((a, b) => b.AVG_ANNUAL_YIELD_TRAILING_5YRS - a.AVG_ANNUAL_YIELD_TRAILING_5YRS);
    //     return data.result.records as PensionFundDTO[];
    // }
    //
    // public async getFunds() {
    //     let sortedFunds = [];
    //     const fundClassifications = [
    //         [FUND_CLASSIFICATION_ENUM.PENSION_FUND, SUB_SPECIALIZATION_ENUM.AGED_50_AND_UNDER],
    //         [FUND_CLASSIFICATION_ENUM.PENSION_FUND, SUB_SPECIALIZATION_ENUM.BETWEEN_50_and_60],
    //         [FUND_CLASSIFICATION_ENUM.PENSION_FUND, SUB_SPECIALIZATION_ENUM.AGED_60_AND_OVER],
    //         [FUND_CLASSIFICATION_ENUM.COMPLEMENTARY_PENSION_FUND, SUB_SPECIALIZATION_ENUM.AGED_50_AND_UNDER],
    //         [FUND_CLASSIFICATION_ENUM.COMPLEMENTARY_PENSION_FUND, SUB_SPECIALIZATION_ENUM.BETWEEN_50_and_60],
    //         [FUND_CLASSIFICATION_ENUM.COMPLEMENTARY_PENSION_FUND, SUB_SPECIALIZATION_ENUM.AGED_60_AND_OVER]
    //     ];
    //     try {
    //         const requests = fundClassifications.map(
    //             async ([classification, specialization]) =>
    //                 await axios.get(`${GOVERNMENT_BASE_URL}${RESOURCE_ID_ENUM.PENSION_RESOURCE_ID}&q=${classification}&q=${specialization}`)
    //         );
    //
    //         const responses = await axios.all(requests);
    //         sortedFunds = responses.map(response => {
    //             response.data.result.records.sort((a, b) =>
    //                 b.AVG_ANNUAL_YIELD_TRAILING_5YRS - a.AVG_ANNUAL_YIELD_TRAILING_5YRS);
    //
    //             response.data.result.records.map(fund => {
    //                 for (let key in fund) {
    //                     fund[key] = `${fund[key]}`
    //                 }
    //
    //             });
    //             return response.data.result.records as PensionFundDTO[];
    //         });
    //     } catch (error) {
    //         console.error('Failed to get pension funds', error);
    //     }
    //     // const fundsToSave = [...sortedFunds];
    //     // const batches = splitArrayIntoBatches(fundsToSave, 25);
    //     // console.log('batches[0]', batches[0]);
    //     // batches.map(async batch => await this.pensionFundsModel.batchPut(batch));
    //
    //     return [sortedFunds.slice(0, 3), sortedFunds.slice(3, 6)];
    //     // [PENSION_FUND, COMPLEMENTARY_PENSION_FUND]
    //
    // }
}
