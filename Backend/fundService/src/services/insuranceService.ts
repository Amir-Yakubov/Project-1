import {Injectable} from '@nestjs/common';
import {InjectModel, Model} from "nestjs-dynamoose";
import {TABLES} from "../ddb/common/Tables";
import {InsuranceFundsPK} from "../ddb/models/insuranceFundsModel";
import {InsuranceFundDTO} from "../dto/insuranceFundDTO";
import {splitArrayIntoBatches} from "../utils/utilFunctions";

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

    // public async getData(SPECIALIZATION: SUB_SPECIALIZATION_ENUM) {
    //     let sortedFunds: PensionFundDTO[];
    //     try {
    //         const {data} = await axios.get(GOVERNMENT_BASE_URL + RESOURCE_ID_ENUM.INSURANCE_RESOURCE_ID + `&q=${SPECIALIZATION}`);
    //         data.result.records.sort((a, b) => b.AVG_ANNUAL_YIELD_TRAILING_5YRS - a.AVG_ANNUAL_YIELD_TRAILING_5YRS);
    //         sortedFunds = data.result.records;
    //         console.log('INSURANCE sorted funds', sortedFunds);
    //     } catch (error) {
    //         console.log('Failed to get Funds From DB', error);
    //     }
    //     return sortedFunds as PensionFundDTO[];
    // }
    //
    // public async getFunds() {
    //     let sortedFunds: any[];
    //     const subSpecializations: SUB_SPECIALIZATION_ENUM[] = [
    //         SUB_SPECIALIZATION_ENUM.STOCKS,
    //         SUB_SPECIALIZATION_ENUM.GENERAL,
    //         SUB_SPECIALIZATION_ENUM.BONDS
    //     ];
    //
    //     try {
    //         const requests = subSpecializations.map(async specialization =>
    //             await axios.get(`${GOVERNMENT_BASE_URL}${RESOURCE_ID_ENUM.INSURANCE_RESOURCE_ID}&q=${specialization}`));
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
    //             });
    //             return response.data.result.records as PensionFundDTO[];
    //         });
    //
    //     } catch (error) {
    //         console.log('Failed to get insurance funds', error);
    //     }
    //
    //     // const fundsToSave = [...sortedFunds];
    //     // const batches = splitArrayIntoBatches(fundsToSave, 25);
    //     // batches.map(async batch => await this.insuranceFundsModel.batchPut(batch));
    //     return [sortedFunds];
    //
    //     // [SAVINGS_POLICY_FUNDS]
    // }
}
