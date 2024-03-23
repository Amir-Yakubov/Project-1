import {Injectable} from '@nestjs/common';
import {InjectModel, Model} from "nestjs-dynamoose";
import {TABLES} from "../ddb/common/Tables";
import {ProvidentFundDTO} from "../dto/providentFundDTO";
import {ProvidentFundsPK} from "../ddb/models/providentFundsModel";
import {splitArrayIntoBatches} from "../utils/utilFunctions";

@Injectable()
export class ProvidentService {
    constructor(
        @InjectModel(TABLES.PROVIDENT_FUNDS)
        private readonly providentFundsModel: Model<ProvidentFundDTO, ProvidentFundsPK>,
    ) {
    }
    public async saveFunds(providentFunds: ProvidentFundDTO[]) {
        const fundsToSave: ProvidentFundDTO[][] = splitArrayIntoBatches(providentFunds ,25);
        try {
            return fundsToSave.map(async (fundsBatch, i) =>
                await this.providentFundsModel.batchPut(fundsBatch));
        } catch (error) {
            console.error('Failed to save pension funds', error);
        }
    }

    // public async getFunds() {
    //     let sortedFunds = [];
    //     const fundClassifications = [
    //         [FUND_CLASSIFICATION_ENUM.CHILDREN_FUND, SUB_SPECIALIZATION_ENUM.INCREASED_RISK],
    //         [FUND_CLASSIFICATION_ENUM.CHILDREN_FUND, SUB_SPECIALIZATION_ENUM.MEDIUM_RISK],
    //         [FUND_CLASSIFICATION_ENUM.CHILDREN_FUND, SUB_SPECIALIZATION_ENUM.LITTLE_RISK],
    //         [FUND_CLASSIFICATION_ENUM.PROVIDENT_FUND_FOR_INVESTMENT, SUB_SPECIALIZATION_ENUM.STOCKS],
    //         [FUND_CLASSIFICATION_ENUM.PROVIDENT_FUND_FOR_INVESTMENT, SUB_SPECIALIZATION_ENUM.GENERAL],
    //         [FUND_CLASSIFICATION_ENUM.PROVIDENT_FUND_FOR_INVESTMENT, SUB_SPECIALIZATION_ENUM.BONDS],
    //         [FUND_CLASSIFICATION_ENUM.EDUCATION_FUND, SUB_SPECIALIZATION_ENUM.STOCKS],
    //         [FUND_CLASSIFICATION_ENUM.EDUCATION_FUND, SUB_SPECIALIZATION_ENUM.GENERAL],
    //         [FUND_CLASSIFICATION_ENUM.EDUCATION_FUND, SUB_SPECIALIZATION_ENUM.BONDS],
    //         [FUND_CLASSIFICATION_ENUM.PROVIDENT_FUND, SUB_SPECIALIZATION_ENUM.STOCKS],
    //         [FUND_CLASSIFICATION_ENUM.PROVIDENT_FUND, SUB_SPECIALIZATION_ENUM.GENERAL],
    //         [FUND_CLASSIFICATION_ENUM.PROVIDENT_FUND, SUB_SPECIALIZATION_ENUM.BONDS],
    //     ];
    //
    //     try {
    //         const requests = fundClassifications.map(async ([fund_classification, sub_specialization]) =>
    //             await axios.get(`${GOVERNMENT_BASE_URL}${RESOURCE_ID_ENUM.PROVIDENT_FUND_RESOURCE_ID}&q=${fund_classification}&q=${sub_specialization}`)
    //         );
    //         const responses = await axios.all(requests);
    //         sortedFunds = responses.map(response => {
    //             response.data.result.records.sort((a, b) =>
    //                 b.AVG_ANNUAL_YIELD_TRAILING_5YRS - a.AVG_ANNUAL_YIELD_TRAILING_5YRS);
    //
    //             response.data.result.records.map(fund => {
    //                 for (let key in fund) {
    //                     fund[key] = `${fund[key]}`
    //                 }
    //             });
    //             return response.data.result.records as PensionFundDTO[];
    //         });
    //
    //     } catch (error) {
    //         console.error('Failed to get provident funds', error);
    //     }
    //     // const fundsToSave = [...sortedFunds];
    //     // const batches = splitArrayIntoBatches(fundsToSave, 25);
    //     // batches.map(async batch => await this.providentFundsModel.batchPut(batch));
    //
    //     return [
    //         sortedFunds.slice(0, 3),
    //         sortedFunds.slice(3, 6),
    //         sortedFunds.slice(6, 9),
    //         sortedFunds.slice(9, 12)
    //     ];
    //
    //     // [CHILDREN_FUND, PROVIDENT_FUND_FOR_INVESTMENT, EDUCATION_FUND, PROVIDENT_FUND]
    // }
}
