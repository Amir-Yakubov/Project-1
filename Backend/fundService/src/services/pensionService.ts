import { Injectable } from '@nestjs/common';
import axios from "axios";
import {FundDTO} from "../../dto/fundDTO";
import {GOVERNMENT_BASE_URL, PENSION_RESOURCE_ID} from "../utils/Constans";

@Injectable()
export class PensionService {

  public async getData(FUND_CLASSIFICATION, SPECIALIZATION){
      const { data } = await axios.get(
          GOVERNMENT_BASE_URL + PENSION_RESOURCE_ID + `&q=${FUND_CLASSIFICATION}` + `&q=${SPECIALIZATION}`);
      data.result.records.sort((a, b) => b.AVG_ANNUAL_YIELD_TRAILING_5YRS - a.AVG_ANNUAL_YIELD_TRAILING_5YRS);
      return data.result.records as FundDTO[];
    }
}
