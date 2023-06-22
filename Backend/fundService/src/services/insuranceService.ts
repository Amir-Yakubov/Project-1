import { Injectable } from '@nestjs/common';
import axios from "axios";
import {FundDTO} from "../../dto/fundDTO";
import {GOVERNMENT_BASE_URL, INSURANCE_RESOURCE_ID} from "../utils/Constans";

@Injectable()
export class InsuranceService {

  public async getData(SPECIALIZATION){
      const { data } = await axios.get(
          GOVERNMENT_BASE_URL + INSURANCE_RESOURCE_ID + `&q=${SPECIALIZATION}`);
      data.result.records.sort((a, b) => b.AVG_ANNUAL_YIELD_TRAILING_5YRS - a.AVG_ANNUAL_YIELD_TRAILING_5YRS);
      return data.result.records as FundDTO[];
    }
}
