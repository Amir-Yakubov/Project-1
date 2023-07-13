import {Injectable} from '@nestjs/common';
import axios from "axios";
import {FundDTO} from "../../dto/fundDTO";
import {GOVERNMENT_BASE_URL, INSURANCE_RESOURCE_ID} from "../utils/Constans";
import {getDateFormatted} from "../utils/time"
import {FUND_CLASSIFICATION_ENUM} from "../Enum/FUND_CLASSIFICATION_ENUM";
import {SUB_SPECIALIZATION_ENUM} from "../Enum/SUB_SPECIALIZATION_ENUM";

@Injectable()
export class InsuranceService {

    public async getData(SPECIALIZATION) {
        const date = getDateFormatted();
        const {data} = await axios.get(
            GOVERNMENT_BASE_URL + INSURANCE_RESOURCE_ID + `&q=${SPECIALIZATION}` + `&q=${date}`);
        data.result.records.sort((a, b) => b.AVG_ANNUAL_YIELD_TRAILING_5YRS - a.AVG_ANNUAL_YIELD_TRAILING_5YRS);
        return data.result.records as FundDTO[];
    }

    public async getFunds() {
        const date = getDateFormatted();
        const subSpecializations = [
            SUB_SPECIALIZATION_ENUM.STOCKS,
            SUB_SPECIALIZATION_ENUM.GENERAL,
            SUB_SPECIALIZATION_ENUM.BONDS
        ];

        const requests = subSpecializations.map(specialization =>
            axios.get(`${GOVERNMENT_BASE_URL}${INSURANCE_RESOURCE_ID}&q=${specialization}&q=${date}`)
        );

        const responses = await axios.all(requests);
        const sortedData = responses.map(response =>
            response.data.result.records.sort(
                (a, b) => b.AVG_ANNUAL_YIELD_TRAILING_5YRS - a.AVG_ANNUAL_YIELD_TRAILING_5YRS
            )
        );

        return [sortedData];
        // [SAVINGS_POLICY_FUNDS]
    }
}
