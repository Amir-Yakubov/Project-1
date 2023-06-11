import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { GemelnetAdapter } from "../adapters/GemelnetAdapter";

const providers = [GemelnetAdapter];

@Module({
  imports: [HttpModule],
  exports: providers,
  providers: providers,
})
export class AdaptersModule {}
