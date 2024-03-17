import {store} from './store.js'
import {LOADING_DONE, LOADING_START} from './system.reducer.js'
import {SET_FUNDS} from './fund.reducer'
import {fundService} from "../services/fund.service";

// Load
export async function loadFunds() {
    store.dispatch({type: LOADING_START});

    let allFunds = [];
    let cachedData = localStorage.getItem('funds');

    if (cachedData) {
        allFunds = JSON.parse(cachedData);
    } else {
        try {
            console.log('start sending request to backend');
            allFunds = await fundService.getFunds();
            localStorage.setItem('funds', JSON.stringify(allFunds));
        } catch (error) {
            console.error('Failed to get funds', error)
        }
    }

    const funds = [allFunds[1][0], allFunds[1][1], allFunds[1][2], allFunds[0][0], allFunds[2][0], allFunds[1][3]];
    // [CHILDREN_FUND, PROVIDENT_FUND_FOR_INVESTMENT, EDUCATION_FUND, PENSION_FUND, SAVINGS_POLICY_FUNDS, PROVIDENT_FUND]

    store.dispatch({type: SET_FUNDS, funds: funds});
    store.dispatch({type: LOADING_DONE});
}
