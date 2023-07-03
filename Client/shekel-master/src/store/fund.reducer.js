export const SET_FUNDS = 'SET_FUNDS'
export const REMOVE_FUND = 'REMOVE_FUND'
export const UNDO_REMOVE_FUND = 'UNDO_REMOVE_FUND'
export const ADD_FUND = 'ADD_FUND'
export const UPDATE_FUND = 'UPDATE_FUND'
export const SET_FUND = 'SET_FUND'

const initialState = {
    funds: [],
    fund: null,
    lastRemovedFund: null
}

export function fundReducer(state = initialState, action) {
    let funds
    let lastRemovedFund

    switch (action.type) {
        case SET_FUNDS:
            return {...state, funds: action.funds}
        case SET_FUND:
            return {...state, fund: action.fundToSave}
        case REMOVE_FUND:
            lastRemovedFund = state.funds.find(b => b._id === action.fundId)
            funds = state.funds.filter(b => b._id !== action.fundId)
            return {...state, funds, lastRemovedFund}
        case UNDO_REMOVE_FUND:
            ({lastRemovedFund} = state)
            funds = [lastRemovedFund, ...state.funds]
            return {...state, funds, lastRemovedFund: null}
        case ADD_FUND:
            funds = [...state.funds, action.fund]
            return {...state, funds}
        case UPDATE_FUND:
            funds = state.funds.map(fund => fund._id === action.fund._id ? action.fund : fund)
            return {...state, funds}
        default:
            return state
    }
}