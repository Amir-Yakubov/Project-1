import {httpService} from "./http.service";
import {lastValueFrom} from "rxjs";

const BASE_URL = 'fund_service/'

export const fundService = {
    query,
    get,
    remove,
    getChildrenFundBySpecialization,
    save,
    getDefaultFundFilter,
    getProvidentFundForInvestmentSpecialization,
    getEducationFundBySpecialization,
    getPensionFundBySpecialization,
    getComplementaryPensionFundBySpecialization,
    getSavingsPolicyBySpecialization,
    getProvidentFundBySpecialization
}

window.cs = fundService

async function query(filterBy = {title: ''}) {
    const queryParams = `?title=${filterBy.title}`
    return httpService.get(BASE_URL + queryParams)
}

function get(fundId) {
    return httpService.get(BASE_URL + fundId)
}

async function remove(fundId) {
    return httpService.delete(BASE_URL + fundId)
}

async function save(fund) {
    let savedFund
    if (fund._id) {
        savedFund = await httpService.put(BASE_URL + fund._id, fund)
    } else {
        savedFund = await httpService.post(BASE_URL, fund)
    }
    return savedFund
}

function getDefaultFundFilter() {
    return {title: '', isStared: false}
}

/////////////////////
async function getChildrenFundBySpecialization(specialization) {
    // return await httpService.get(BASE_URL + 'children_fund/' + specialization)
    return await httpService.get(BASE_URL + 'children_fund/' + specialization)
}

async function getProvidentFundForInvestmentSpecialization(specialization) {
    return await httpService.get(BASE_URL + 'provident_fund_for_investment/' + specialization)
}

async function getEducationFundBySpecialization(specialization) {
    return await httpService.get(BASE_URL + 'education_fund/' + specialization)
}

async function getPensionFundBySpecialization(specialization) {
    return await httpService.get(BASE_URL + 'pension_fund/' + specialization)
}

async function getComplementaryPensionFundBySpecialization(specialization) {
    return await httpService.get(BASE_URL + 'complementary_pension_fund/' + specialization)
}

async function getSavingsPolicyBySpecialization(specialization) {
    return await httpService.get(BASE_URL + 'savings_policy/' + specialization)
}

async function getProvidentFundBySpecialization(specialization) {
    return await httpService.get(BASE_URL + 'provident_fund/' + specialization)
}
