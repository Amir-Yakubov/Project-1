import {Injectable} from "@nestjs/common";
import {PensionFundDTO} from "../dto/pensionFundDTO";
import {FUND_CLASSIFICATION_ENUM} from "../Enum/FUND_CLASSIFICATION_ENUM";
import {SUB_SPECIALIZATION_ENUM} from "../Enum/SUB_SPECIALIZATION_ENUM";
import axios from "axios";
import {GOVERNMENT_BASE_URL} from "../utils/Constants";
import {RESOURCE_ID_ENUM} from "../Enum/RESOURCE_ID_ENUM";
import {FundService} from "../services/fundService";
import {v4 as uuidv4} from 'uuid';

@Injectable()
export class GovAdapter {
    private readonly fundsService: FundService

    public async initFunds() {
        let pensionFunds = [];
        let providentFunds = [];
        let insuranceFunds = [];
        try {
            pensionFunds = await this.getFunds(RESOURCE_ID_ENUM.PENSION_RESOURCE_ID,
                FUND_CLASSIFICATION_ENUM.NONE, SUB_SPECIALIZATION_ENUM.NONE);
            providentFunds = await this.getFunds(RESOURCE_ID_ENUM.PROVIDENT_FUND_RESOURCE_ID,
                FUND_CLASSIFICATION_ENUM.NONE, SUB_SPECIALIZATION_ENUM.NONE);
            insuranceFunds = await this.getFunds(RESOURCE_ID_ENUM.INSURANCE_RESOURCE_ID,
                FUND_CLASSIFICATION_ENUM.NONE, SUB_SPECIALIZATION_ENUM.NONE);
        } catch (error) {
            console.error('Failed to init funds', error);
        }
        return [...pensionFunds, ...providentFunds, ...insuranceFunds] as PensionFundDTO[];
    }

    public async getFunds(
        RESOURCE_ID: RESOURCE_ID_ENUM,
        FUND_CLASSIFICATION: FUND_CLASSIFICATION_ENUM = FUND_CLASSIFICATION_ENUM.NONE,
        SUB_SPECIALIZATION: SUB_SPECIALIZATION_ENUM = SUB_SPECIALIZATION_ENUM.NONE
    ) {

        let url: string = GOVERNMENT_BASE_URL + `${RESOURCE_ID}`;
        if (FUND_CLASSIFICATION) url += `&q=${FUND_CLASSIFICATION}`;
        if (SUB_SPECIALIZATION) url += `&q=${SUB_SPECIALIZATION}`;
        console.log('url', url);
        const {data} = await axios.get(url);
        const funds: any[] = data.result.records;
        console.log('funds.length', funds.length);
        funds.map(fund => {
            fund._id = uuidv4();
            for (let key in fund) {
                if (fund[key] === null) fund[key] = `0`;
                else fund[key] = `${fund[key]}`;
            }
        });
        return data.result.records;
    }
}