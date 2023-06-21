import { Injectable } from '@nestjs/common';
import axios from "axios";

@Injectable()
export class FundService {

  public async getData(FUND_CLASSIFICATION, SPECIALIZATION){
      const BASE_URL = 'https://data.gov.il/api/3/action/datastore_search';
      const RESOURCE_ID = '?resource_id=a30dcbea-a1d2-482c-ae29-8f781f5025fb';
      const { data } = await axios.get(BASE_URL + RESOURCE_ID + `&q=${FUND_CLASSIFICATION}` + `&q=${SPECIALIZATION}`);
      return data.result.records;
    }
}
