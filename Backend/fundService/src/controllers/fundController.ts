import {Controller, Get} from '@nestjs/common';
import {FundService} from "../services/fundService";

@Controller('fund_service/')
export class FundController {
    constructor(
        private fundService: FundService
    ) {}
    @Get('')
    public async getFunds() {
        return await this.fundService.initFunds();
    }
}
