import {Injectable} from '@nestjs/common';
import axios from "axios";
import {FundDTO} from "../../dto/fundDTO";
import {GOVERNMENT_BASE_URL, PENSION_RESOURCE_ID} from "../utils/Constans";
import {getDateFormatted} from "../utils/time"
import {FUND_CLASSIFICATION_ENUM} from "../Enum/FUND_CLASSIFICATION_ENUM";
import {SUB_SPECIALIZATION_ENUM} from "../Enum/SUB_SPECIALIZATION_ENUM";

@Injectable()
export class PensionService {

    public async getData(FUND_CLASSIFICATION, SPECIALIZATION) {
        const date = getDateFormatted();
        const {data} = await axios.get(
            GOVERNMENT_BASE_URL + PENSION_RESOURCE_ID + `&q=${FUND_CLASSIFICATION}` + `&q=${SPECIALIZATION}` + `&q=${date}`);
        data.result.records.sort((a, b) => b.AVG_ANNUAL_YIELD_TRAILING_5YRS - a.AVG_ANNUAL_YIELD_TRAILING_5YRS);
        return data.result.records as FundDTO[];
    }

    public async getFunds() {
        const date = getDateFormatted();
        const fundClassifications = [
            [FUND_CLASSIFICATION_ENUM.PENSION_FUND, SUB_SPECIALIZATION_ENUM.AGED_50_AND_UNDER],
            [FUND_CLASSIFICATION_ENUM.PENSION_FUND, SUB_SPECIALIZATION_ENUM.BETWEEN_50_and_60],
            [FUND_CLASSIFICATION_ENUM.PENSION_FUND, SUB_SPECIALIZATION_ENUM.AGED_60_AND_OVER],
            [FUND_CLASSIFICATION_ENUM.COMPLEMENTARY_PENSION_FUND, SUB_SPECIALIZATION_ENUM.AGED_50_AND_UNDER],
            [FUND_CLASSIFICATION_ENUM.COMPLEMENTARY_PENSION_FUND, SUB_SPECIALIZATION_ENUM.BETWEEN_50_and_60],
            [FUND_CLASSIFICATION_ENUM.COMPLEMENTARY_PENSION_FUND, SUB_SPECIALIZATION_ENUM.AGED_60_AND_OVER]
        ];

        const requests = fundClassifications.map(([classification, specialization]) =>
            axios.get(
                `${GOVERNMENT_BASE_URL}${PENSION_RESOURCE_ID}&q=${classification}&q=${specialization}&q=${date}`
            )
        );

        const responses = await axios.all(requests);
        const sortedData = responses.map(response =>
            response.data.result.records.sort(
                (a, b) => b.AVG_ANNUAL_YIELD_TRAILING_5YRS - a.AVG_ANNUAL_YIELD_TRAILING_5YRS
            )
        );

        return [sortedData.slice(0, 3), sortedData.slice(3, 6)];
        // [PENSION_FUND, COMPLEMENTARY_PENSION_FUND]
    }
}
