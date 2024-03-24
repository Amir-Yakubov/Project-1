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
        const isDataUpdated: boolean = await this.getTimeRelevance();
        if (!isDataUpdated) {
            console.log('Entered');
            const newFunds = await this.getFundsFromGov();
            await this.saveFundsToDB(newFunds);
        }
        return await this.getFundsForDisplay();
    }

    private async getFundsFromGov() {
        try {
            const pensionFunds: PensionFundDTO[] = await this.govAdapter.getFunds(RESOURCE_ID_ENUM.PENSION_RESOURCE_ID);
            const providentFunds: ProvidentFundDTO[] = await this.govAdapter.getFunds(RESOURCE_ID_ENUM.PROVIDENT_FUND_RESOURCE_ID);
            const insuranceFunds: InsuranceFundDTO[] = await this.govAdapter.getFunds(RESOURCE_ID_ENUM.INSURANCE_RESOURCE_ID);

            return {pensionFunds, providentFunds, insuranceFunds};
        } catch (error) {
            console.error('Failed to get new funds', error);
        }
    }

    private async saveFundsToDB(funds: {
        pensionFunds: PensionFundDTO[], providentFunds: ProvidentFundDTO[],
        insuranceFunds: InsuranceFundDTO[]
    }) {
        try {
            await this.pensionService.saveFunds(funds.pensionFunds);
            await this.providentService.saveFunds(funds.providentFunds);
            await this.insuranceService.saveFunds(funds.insuranceFunds);
        } catch (error) {
            console.error('Failed to save funds', error);
        }
    }

    private async getFundsForDisplay() {
        try {
            const topPension: PensionFundDTO[][][] = await this.pensionService.getTop3();
            const topProvident: ProvidentFundDTO[][][] = await this.providentService.getTop3();
            const topInsurance: InsuranceFundDTO[][][] = await this.insuranceService.getTop3();
            return [topPension, topProvident, topInsurance];
        } catch (error) {
            console.error('Failed to get top 3 funds', error);
        }
    }

    private async getTimeRelevance() {
        const day: number = new Date().getDate();
        console.log('day !== 16', day !== 16);
        return day !== 16;
    }
}