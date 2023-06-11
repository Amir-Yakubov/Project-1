import { Injectable } from '@nestjs/common';
import { GemelnetAdapter } from "../adapters/GemelnetAdapter";

@Injectable()
export class GemelnetService {
  constructor(private gemelnetAdapter: GemelnetAdapter) {
  }

  async getGemelNetData() {
    return await this.gemelnetAdapter.getData();
  }
}
