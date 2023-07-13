import {store} from './store.js'
import {SET_FUNDS} from './fund.reducer'
import {LOADING_DONE, LOADING_START} from './system.reducer.js'
import {fundService} from "../services/fund.service";

// Load
export async function loadFunds() {
    store.dispatch({type: LOADING_START})
    try {
        const providentFunds = await fundService.getProvidentFunds();
        const pensionFunds = await fundService.getPensionFunds();
        const insuranceFunds = await fundService.getInsuranceFunds();
        const funds = [providentFunds[0], providentFunds[1], providentFunds[2], pensionFunds[0], insuranceFunds[0], providentFunds[3]];
        // [CHILDREN_FUND, PROVIDENT_FUND_FOR_INVESTMENT, EDUCATION_FUND, PENSION_FUND, SAVINGS_POLICY_FUNDS, PROVIDENT_FUND]
        store.dispatch({type: SET_FUNDS, funds: funds});
    } catch (err) {
        console.log('Had issues loading funds', err);
        throw err;
    } finally {
        store.dispatch({type: LOADING_DONE});
    }
}
