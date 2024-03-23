import {Injectable} from "@nestjs/common";
import {PensionFundDTO} from "../dto/pensionFundDTO";
import {GovAdapter} from "../adapters/govAdapter";
import {RESOURCE_ID_ENUM} from "../Enum/RESOURCE_ID_ENUM";
import {PensionService} from "./pensionService";
import {ProvidentService} from "./providentService";
import {ProvidentFundDTO} from "../dto/providentFundDTO";
import {InsuranceService} from "./insuranceService";
import {InsuranceFundDTO} from "../dto/insuranceFundDTO";

@Injectable()
export class FundService {
    constructor(
        private readonly govAdapter: GovAdapter,
        private readonly pensionService: PensionService,
        private readonly providentService: ProvidentService,
        private readonly insuranceService: InsuranceService
    ) {
    }

    public async initFunds() {

        const newFunds: any = await this.getNewFunds();
        await this.saveFundsToDB(newFunds);
        const timeRelevance = await this.getTimeRelevance();
        // if date > 15 and tableDate more than prev month init funds
    }

    private async getNewFunds() {
        try {
            const pensionFunds: PensionFundDTO[] = await this.govAdapter.getFunds(RESOURCE_ID_ENUM.PENSION_RESOURCE_ID);
            const providentFunds: ProvidentFundDTO[] = await this.govAdapter.getFunds(RESOURCE_ID_ENUM.PROVIDENT_FUND_RESOURCE_ID);
            const insuranceFunds: InsuranceFundDTO[] = await this.govAdapter.getFunds(RESOURCE_ID_ENUM.INSURANCE_RESOURCE_ID);

            return {pensionFunds, providentFunds, insuranceFunds};
        } catch (error) {
            console.error('Failed to get new funds', error);
        }
    }


    private async saveFundsToDB(
        newFunds: { pensionFunds: [], providentFunds: [], insuranceFunds: [] }) {
        try {
            await this.pensionService.saveFunds(newFunds.pensionFunds);
            await this.providentService.saveFunds(newFunds.providentFunds);
            await this.insuranceService.saveFunds(newFunds.insuranceFunds);
        } catch (error) {
            console.error('Failed to save funds', error);
        }
    }
    private async getTimeRelevance() {
        const currentDate: Date = new Date();
        const day: number = currentDate.getDate();
        const month: number = currentDate.getMonth() + 1;
    }
}