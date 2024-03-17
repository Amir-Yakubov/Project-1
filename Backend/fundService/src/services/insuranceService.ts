import {Injectable} from '@nestjs/common';
import axios from "axios";
import {FundDTO} from "../../dto/fundDTO";
import {GOVERNMENT_BASE_URL, INSURANCE_RESOURCE_ID} from "../utils/Constants";
import {getDateFormatted} from "../utils/time"
import {SUB_SPECIALIZATION_ENUM} from "../Enum/SUB_SPECIALIZATION_ENUM";

@Injectable()
export class InsuranceService {

    public async getData(SPECIALIZATION: SUB_SPECIALIZATION_ENUM) {
        const date = getDateFormatted();
        let sortedFunds: FundDTO[];
        try {
            const {data} = await axios.get(GOVERNMENT_BASE_URL + INSURANCE_RESOURCE_ID + `&q=${SPECIALIZATION}`);
            data.result.records.sort((a, b) => b.AVG_ANNUAL_YIELD_TRAILING_5YRS - a.AVG_ANNUAL_YIELD_TRAILING_5YRS);
            sortedFunds = data.result.records;
            console.log('INSURANCE sorted funds', sortedFunds);
        } catch (error) {
            console.log('Failed to get Funds From DB', error);
        }
        return sortedFunds as FundDTO[];
    }

    public async getFunds() {
        let sortedFunds: any[];
        const subSpecializations: SUB_SPECIALIZATION_ENUM[] = [
            SUB_SPECIALIZATION_ENUM.STOCKS,
            SUB_SPECIALIZATION_ENUM.GENERAL,
            SUB_SPECIALIZATION_ENUM.BONDS
        ];

        const requests = subSpecializations.map(specialization =>
            axios.get(`${GOVERNMENT_BASE_URL}${INSURANCE_RESOURCE_ID}&q=${specialization}`)
        );

        try {
            const responses = await axios.all(requests);
            sortedFunds = responses.map(response =>
                response.data.result.records.sort((a, b) =>
                    b.AVG_ANNUAL_YIELD_TRAILING_5YRS - a.AVG_ANNUAL_YIELD_TRAILING_5YRS));
        } catch (error) {
            console.log('Failed to get insurance funds', error);
        }

        return [sortedFunds.slice(0, 3)];
        // [SAVINGS_POLICY_FUNDS]
    }
}
