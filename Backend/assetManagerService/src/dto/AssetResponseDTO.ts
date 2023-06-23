export class AssetResponseDTO {
    user_id: string;
    fund_id: string;
    amount: number;
    entry_date: number;
    maturity_date: number;

    constructor(user_id: string, fund_id: string, amount: number, entry_date: number, maturity_date: number) {
        this.user_id = user_id;
        this.fund_id = fund_id;
        this.amount = amount;
        this.entry_date = entry_date;
        this.maturity_date = maturity_date;
    }
}