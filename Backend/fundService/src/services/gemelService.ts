import { Injectable } from '@nestjs/common';
import axios from "axios";
import {FundDTO} from "../../dto/fundDTO";

@Injectable()
export class GemelService {

  public async getData(fund_classification, specialization){
      const BASE_URL = 'https://data.gov.il/api/3/action/datastore_search';
      const RESOURCE_ID = '?resource_id=a30dcbea-a1d2-482c-ae29-8f781f5025fb';
      const { data } = await axios.get(BASE_URL + RESOURCE_ID + `&q=${fund_classification}` + `&q=${specialization}`);
      data.result.records.sort((a, b) => b.AVG_ANNUAL_YIELD_TRAILING_5YRS - a.AVG_ANNUAL_YIELD_TRAILING_5YRS);
      return data.result.records as FundDTO[];
    }
}
