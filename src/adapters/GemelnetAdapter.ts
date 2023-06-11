import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { lastValueFrom } from "rxjs";

@Injectable()
export class GemelnetAdapter {
  constructor(private readonly httpService: HttpService) {
  }

  public async getData(){
    const BASE_URL = 'https://data.gov.il/api/3/action/datastore_search';
    const { data } = await lastValueFrom(this.httpService.get(
      BASE_URL + '?resource_id=a30dcbea-a1d2-482c-ae29-8f781f5025fb' + '&limit=5'));
    return data.result.records;
  }
}