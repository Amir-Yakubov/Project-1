import {Injectable} from '@nestjs/common';
import axios from "axios";
import {FundDTO} from "../../dto/fundDTO";
import {getDateFormatted} from "../utils/time"
import {GOVERNMENT_BASE_URL, PROVIDENT_FUND_RESOURCE_ID,} from "../utils/Constants";
import {FUND_CLASSIFICATION_ENUM} from "../Enum/FUND_CLASSIFICATION_ENUM";
import {SUB_SPECIALIZATION_ENUM} from "../Enum/SUB_SPECIALIZATION_ENUM";

@Injectable()
export class ProvidentFundService {

    public async getData(fund_classification, specialization) {
        const date = getDateFormatted();
        const {data} = await axios.get(
            GOVERNMENT_BASE_URL + PROVIDENT_FUND_RESOURCE_ID + `&q=${fund_classification}` + `&q=${specialization}`);
        data.result.records.sort((a, b) => b.AVG_ANNUAL_YIELD_TRAILING_5YRS - a.AVG_ANNUAL_YIELD_TRAILING_5YRS);
        return data.result.records as FundDTO[];
    }

    public async getFunds() {
        const date = getDateFormatted();
        const fundClassifications = [
            [FUND_CLASSIFICATION_ENUM.CHILDREN_FUND, SUB_SPECIALIZATION_ENUM.INCREASED_RISK],
            [FUND_CLASSIFICATION_ENUM.CHILDREN_FUND, SUB_SPECIALIZATION_ENUM.MEDIUM_RISK],
            [FUND_CLASSIFICATION_ENUM.CHILDREN_FUND, SUB_SPECIALIZATION_ENUM.LITTLE_RISK],
            [FUND_CLASSIFICATION_ENUM.PROVIDENT_FUND_FOR_INVESTMENT, SUB_SPECIALIZATION_ENUM.STOCKS],
            [FUND_CLASSIFICATION_ENUM.PROVIDENT_FUND_FOR_INVESTMENT, SUB_SPECIALIZATION_ENUM.GENERAL],
            [FUND_CLASSIFICATION_ENUM.PROVIDENT_FUND_FOR_INVESTMENT, SUB_SPECIALIZATION_ENUM.BONDS],
            [FUND_CLASSIFICATION_ENUM.EDUCATION_FUND, SUB_SPECIALIZATION_ENUM.STOCKS],
            [FUND_CLASSIFICATION_ENUM.EDUCATION_FUND, SUB_SPECIALIZATION_ENUM.GENERAL],
            [FUND_CLASSIFICATION_ENUM.EDUCATION_FUND, SUB_SPECIALIZATION_ENUM.BONDS],
            [FUND_CLASSIFICATION_ENUM.PROVIDENT_FUND, SUB_SPECIALIZATION_ENUM.STOCKS],
            [FUND_CLASSIFICATION_ENUM.PROVIDENT_FUND, SUB_SPECIALIZATION_ENUM.GENERAL],
            [FUND_CLASSIFICATION_ENUM.PROVIDENT_FUND, SUB_SPECIALIZATION_ENUM.BONDS],
        ];

        const requests = fundClassifications.map(([fund_classification, sub_specialization]) =>
            axios.get(
                `${GOVERNMENT_BASE_URL}${PROVIDENT_FUND_RESOURCE_ID}&q=${fund_classification}&q=${sub_specialization}`
            )
        );

        const responses = await axios.all(requests);
        const sortedData = responses.map(response =>
            response.data.result.records.sort(
                (a, b) => b.AVG_ANNUAL_YIELD_TRAILING_5YRS - a.AVG_ANNUAL_YIELD_TRAILING_5YRS
            )
        );

        return [
            sortedData.slice(0, 3),
            sortedData.slice(3, 6),
            sortedData.slice(6, 9),
            sortedData.slice(9, 12)
        ];
        // [CHILDREN_FUND, PROVIDENT_FUND_FOR_INVESTMENT, EDUCATION_FUND, PROVIDENT_FUND]
    }

}
