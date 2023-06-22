import { Injectable } from '@nestjs/common';
import axios from "axios";
import {FundDTO} from "../../dto/fundDTO";
import {GOVERNMENT_BASE_URL, PROVIDEN_FUND_RESOURCE_ID} from "../utils/Constans";

@Injectable()
export class ProvidenFundService {

  public async getData(fund_classification, specialization){
      const { data } = await axios.get(
          GOVERNMENT_BASE_URL + PROVIDEN_FUND_RESOURCE_ID + `&q=${fund_classification}` + `&q=${specialization}`);
      data.result.records.sort((a, b) => b.AVG_ANNUAL_YIELD_TRAILING_5YRS - a.AVG_ANNUAL_YIELD_TRAILING_5YRS);
      return data.result.records as FundDTO[];
    }
}
