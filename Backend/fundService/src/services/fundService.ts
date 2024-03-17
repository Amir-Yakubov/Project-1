import {Injectable} from "@nestjs/common";
import {InsuranceService} from "./insuranceService";
import {PensionService} from "./pensionService";
import {ProvidentFundService} from "./providentFundService";

@Injectable()
export class FundService {
    constructor
    (
        private insuranceService: InsuranceService,
        private providentFundService: ProvidentFundService,
        private pensionService: PensionService,
    ) {
    }

    public async getFunds() {
        let funds: any[] = [];
        try {
            funds.push(await this.pensionService.getFunds());
            funds.push(await this.providentFundService.getFunds());
            funds.push(await this.insuranceService.getFunds());
        } catch (error) {
            console.error('Failed to get funds', error);
        }
        return funds;
    }

    // public async getFunds(): Promise<string[]> {
    //     const resource_ids: string[] = [PENSION_RESOURCE_ID, PROVIDENT_FUND_RESOURCE_ID, INSURANCE_RESOURCE_ID];
    //     let funds: string[] = [];
    //
    //     try {
    //         const requests = resource_ids.map(async resource =>
    //             await axios.get(`${GOVERNMENT_BASE_URL}${resource}`));
    //
    //         const responses = await axios.all(requests);
    //
    //         funds = responses.map(response =>
    //             response.data.result.records.sort((a, b) =>
    //                 b.AVG_ANNUAL_YIELD_TRAILING_5YRS - a.AVG_ANNUAL_YIELD_TRAILING_5YRS));
    //
    //     } catch (error) {
    //         console.log('Failed to get funds', error);
    //     }
    //     return funds;
    // }
}
