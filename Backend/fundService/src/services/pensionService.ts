import {Injectable} from '@nestjs/common';
import {PensionFundDTO} from "../dto/pensionFundDTO";
import {InjectModel, Model} from "nestjs-dynamoose";
import {TABLES} from "../ddb/common/Tables";
import {PensionFundsPK} from "../ddb/models/pensionFundsModel";
import {splitArrayIntoBatches} from "../utils/utilFunctions";
import {SortOrder} from 'dynamoose/dist/General';
import {FUND_CLASSIFICATION_ENUM} from "../Enum/FUND_CLASSIFICATION_ENUM";
import {SPECIALIZATION_ENUM} from "../Enum/SPECIALIZATION_ENUM";

@Injectable()
export class PensionService {
    constructor(
        @InjectModel(TABLES.PENSION_FUNDS)
        private readonly pensionFundsModel: Model<PensionFundDTO, PensionFundsPK>,
    ) {
    }

    private async queryPension(currentDate: string, fundSpecialization: SPECIALIZATION_ENUM,
                               fundClassification: FUND_CLASSIFICATION_ENUM) {
        return await this.pensionFundsModel.query('CURRENT_DATE')
            .eq(currentDate)
            .where('FUND_NAME')
            .contains(fundSpecialization)
            .where('FUND_CLASSIFICATION')
            .eq(FUND_CLASSIFICATION_ENUM)
            .using('YIELD_5_INDEX')
            .sort(SortOrder.descending)
            .exec();
    }

    public async getTop3() {
        let pensionFundsA: PensionFundDTO[];
        let pensionFundsB: PensionFundDTO[];
        let pensionFundsC: PensionFundDTO[];
        let comPensionFundsA: PensionFundDTO[];
        let comPensionFundsB: PensionFundDTO[];
        let comPensionFundsC: PensionFundDTO[];
        try {
            pensionFundsA = await this.queryPension('3/14/2024 12:00:00 AM',
                SPECIALIZATION_ENUM.AGED_50_AND_UNDER, FUND_CLASSIFICATION_ENUM.PENSION_FUND);
            pensionFundsB = await this.queryPension('3/14/2024 12:00:00 AM',
                SPECIALIZATION_ENUM.BETWEEN_50_and_60, FUND_CLASSIFICATION_ENUM.PENSION_FUND);
            pensionFundsC = await this.queryPension('3/14/2024 12:00:00 AM',
                SPECIALIZATION_ENUM.AGED_60_AND_OVER, FUND_CLASSIFICATION_ENUM.PENSION_FUND);
            comPensionFundsA = await this.queryPension('3/14/2024 12:00:00 AM',
                SPECIALIZATION_ENUM.AGED_50_AND_UNDER, FUND_CLASSIFICATION_ENUM.COMPLEMENTARY_PENSION_FUND);
            comPensionFundsB = await this.queryPension('3/14/2024 12:00:00 AM',
                SPECIALIZATION_ENUM.BETWEEN_50_and_60, FUND_CLASSIFICATION_ENUM.COMPLEMENTARY_PENSION_FUND);
            comPensionFundsC = await this.queryPension('3/14/2024 12:00:00 AM',
                SPECIALIZATION_ENUM.AGED_60_AND_OVER, FUND_CLASSIFICATION_ENUM.COMPLEMENTARY_PENSION_FUND);
        } catch (error) {
            console.error('Failed to get pension funds', error);
        }
        return [
            [pensionFundsA.slice(0, 3), pensionFundsB.slice(0, 3), pensionFundsC.slice(0, 3)],
            [comPensionFundsA.slice(0, 3), comPensionFundsB.slice(0, 3), comPensionFundsC.slice(0, 3)]
        ];
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
}
