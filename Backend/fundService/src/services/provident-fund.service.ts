import {Injectable} from '@nestjs/common';
import axios from "axios";
import {FundDTO} from "../../dto/fundDTO";
import {GOVERNMENT_BASE_URL, PROVIDENT_FUND_RESOURCE_ID} from "../utils/Constans";

@Injectable()
export class ProvidentFundService {

    public async getData(fund_classification, specialization) {
        const date = this.getDateFormatted();
        const {data} = await axios.get(
            GOVERNMENT_BASE_URL + PROVIDENT_FUND_RESOURCE_ID + `&q=${fund_classification}` + `&q=${specialization}` + `&q=${date}`);
        data.result.records.sort((a, b) => b.AVG_ANNUAL_YIELD_TRAILING_5YRS - a.AVG_ANNUAL_YIELD_TRAILING_5YRS);
        return data.result.records as FundDTO[];
    }

    private getDateFormatted() {
        const currentDate = new Date();
        const day = currentDate.getDate();
        const month = currentDate.getMonth() + 1;
        const year = currentDate.getFullYear();

        let formattedDate = '';

        if (day <= 15) {
            const twoMonthsBack = new Date(year, month - 3, 1);
            formattedDate = twoMonthsBack.getFullYear().toString() + ('0' + (twoMonthsBack.getMonth() + 1)).slice(-2);
        } else {
            const previousMonth = new Date(year, month - 2, 1);
            formattedDate = previousMonth.getFullYear().toString() + ('0' + (previousMonth.getMonth() + 1)).slice(-2);
        }

        return formattedDate;
    }
}
