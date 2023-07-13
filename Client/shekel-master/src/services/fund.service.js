import {httpService} from "./http.service";

const BASE_URL = 'fund_service/'

export const fundService = {
    query,
    get,
    remove,
    getProvidentFunds,
    getPensionFunds,
    getInsuranceFunds,
    save,
    getDefaultFundFilter,
};

window.cs = fundService;

async function getProvidentFunds() {
    return httpService.get(BASE_URL + 'provident_funds/');
}

async function getPensionFunds() {
    return httpService.get(BASE_URL + 'pension_funds/');
}

async function getInsuranceFunds() {
    return httpService.get(BASE_URL + 'insurance_funds/');
}

async function query(filterBy = {title: ''}) {
    const queryParams = `?title=${filterBy.title}`;
    return httpService.get(BASE_URL + queryParams);
}

function get(fundId) {
    return httpService.get(BASE_URL + fundId);
}

async function remove(fundId) {
    return httpService.delete(BASE_URL + fundId);
}

async function save(fund) {
    let savedFund;
    if (fund._id) {
        savedFund = await httpService.put(BASE_URL + fund._id, fund);
    } else {
        savedFund = await httpService.post(BASE_URL, fund);
    }
    return savedFund;
}

function getDefaultFundFilter() {
    return {title: '', fund_id: '', isStared: false};
}