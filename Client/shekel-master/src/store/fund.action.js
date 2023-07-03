import {store} from './store.js'
import {REMOVE_FUND, SET_FUNDS, ADD_FUND, UPDATE_FUND, UNDO_REMOVE_FUND, SET_FUND} from './fund.reducer'
import {LOADING_DONE, LOADING_START} from './system.reducer.js'
import {fundService} from "../services/fund.service";

// Load
export async function loadFunds() {
    store.dispatch({type: LOADING_START})
    try {
        const childrenStockFunds = await fundService.getChildrenFundBySpecialization('סיכון מוגבר')
        console.log('childrenStockFunds', childrenStockFunds)
        const childrenGeneralFunds = await fundService.getChildrenFundBySpecialization('סיכון בינוני')
        console.log('childrenGeneralFunds', childrenGeneralFunds)
        const childrenBondFunds = await fundService.getChildrenFundBySpecialization('סיכון מועט')
        console.log('childrenBondFunds', childrenBondFunds)
        const funds = [childrenStockFunds, childrenGeneralFunds, childrenBondFunds]
        console.log('funds', funds)
        store.dispatch({type: SET_FUNDS, funds})
    } catch (err) {
        console.log('Had issues loading funds', err)
        throw err
    } finally {
        store.dispatch({type: LOADING_DONE})
    }
}

// export async function loadFund(fundId, filterBy = fundService.getDefaultGroupFilter()) {
//     try {
//         const fund = await fundService.get(fundId)
//         let fundToSave = structuredClone(fund)
//         let fundGroups = fundToSave.groups
//         if (filterBy.title) {
//             const regex = new RegExp(filterBy.title, 'i')
//             fundGroups = fundGroups.filter(group => {
//                 if (regex.test(group.title)) return true
//                 let tasks = group.tasks.filter(task => regex.test(task.title))
//                 if (!tasks.length) return false
//                 group.tasks = tasks
//                 return group
//             })
//             fundToSave.groups = fundGroups
//         }
//
//         if (filterBy.lables.length) {
//             fundGroups = fundToSave.groups
//             fundGroups = fundGroups.filter(group => {
//                 let tasks = group.tasks.filter(task => filterBy.lables.includes(task.status.txt))
//                 if (!tasks.length) return false
//                 group.tasks = tasks
//                 return group
//             })
//             fundToSave.groups = fundGroups
//         }
//         store.dispatch({type: SET_FUND, fundToSave})
//         return fundToSave
//     } catch (err) {
//         throw err
//     }
// }

// Add
// export async function addGroup(group, fund) {
//     let fullFund = await fundService.get(fund._id)
//     let fundToSave = structuredClone(fullFund)
//     fundToSave.groups.unshift(group)
//     saveFund(fundToSave)
// }

// export async function addActivity(fund, type, from, to, task) {
//     try {
//         let fundToSave = structuredClone(fund)
//         if (!type && !from && !to) return fundToSave
//         let activityToAdd = fundService.getEmptyActivity()
//         activityToAdd = {
//             ...activityToAdd,
//             from,
//             to,
//             task,
//             type,
//             createdAt: Date.now(),
//             byMember: userService.getLoggedinUser()
//         }
//         fundToSave.activities.unshift(activityToAdd)
//         saveFund(fundToSave)
//         return fundToSave
//     } catch (err) {
//         console.log('ActivityActions: err in addActivity', err)
//         throw err
//     }
// }

// export async function addUser(fund, userId) {
//     try {
//         let fundToSave = structuredClone(fund)
//         fundToSave.users.unshift(userId)
//         await saveFund(fundToSave)
//         return fundToSave
//     } catch (err) {
//         console.log('User could not be added', err)
//         throw err
//     }
// }

// Remove
// export async function removeFund(fundId) {
//     try {
//         await fundService.remove(fundId)
//         let funds = await fundService.query()
//         if (!funds.length) {
//             let fundToSave = fundService.getEmptyFund()
//             fundToSave.title = 'New Fund'
//             saveFund(fundToSave)
//             store.dispatch({type: SET_FUND, fundToSave})
//             store.dispatch({type: REMOVE_FUND, fundId})
//
//         } else {
//             let fundToSave = funds[0]
//             store.dispatch({type: SET_FUND, fundToSave})
//             store.dispatch({type: REMOVE_FUND, fundId})
//         }
//     } catch (err) {
//         store.dispatch({type: UNDO_REMOVE_FUND})
//         console.log('Had issues Removing fund', err)
//         throw err
//     }
// }

// export async function removeGroup(fund, groupId) {
//     let fullFund = await fundService.get(fund._id)
//     let fundToSave = fullFund
//     const groupIndex = fundToSave.groups.findIndex(group => group.id === groupId)
//     if (groupIndex === -1) console.log('Could not find group to remove')
//     fundToSave.groups.splice(groupIndex, 1)
//     saveFund(fundToSave)
// }

// export async function removeTask(fund, groupId, taskId) {
//     let fullFund = await fundService.get(fund._id)
//     let fundToSave = structuredClone(fullFund)
//     let currGroup = fundToSave.groups.find(group => group.id === groupId)
//     let taksIdx = currGroup.tasks.findIndex(task => task.id === taskId)
//     currGroup.tasks.splice(taksIdx, 1)
//     saveFund(fundToSave)
// }

// export async function removeUser(fund, userId) {
//     try {
//         let fundToSave = structuredClone(fund)
//         let userIdx = fund.users.findIndex(user => user._id === userId)
//         fundToSave.users.splice(userIdx, 1)
//         await saveFund(fundToSave)
//     } catch (err) {
//         console.log('User could not be added', err)
//         throw err
//     }
// }

// Save
// export async function saveFund(fund) {
//     try {
//         const type = (fund._id) ? UPDATE_FUND : ADD_FUND
//         const fundToSave = await fundService.save(fund)
//         socketService.emit(SOCKET_EVENT_FUND_UPDATED, fundToSave._id)
//         store.dispatch({type: SET_FUND, fundToSave})
//         // Save to current fund
//         store.dispatch({type, fund: fundToSave})
//         return fundToSave
//     } catch (err) {
//         console.error('Cannot save fund:', err)
//         throw err
//     }
// }

// export async function saveGroup(fund, groupId, groupToUpdate) {
//     let fullFund = await fundService.get(fund._id)
//     let fundToSave = structuredClone(fullFund)
//     const groupIndex = fundToSave.groups.findIndex(group => group.id === groupId)
//     if (groupIndex === -1) console.log('Could not find group to update')
//     fundToSave.groups.splice(groupIndex, 1, groupToUpdate)
//     console.log('fundToSave', fundToSave)
//     saveFund(fundToSave)
// }

// export async function saveTask(fund, groupId, task, type, from, to) {
//     let fundToSave = structuredClone(fund)
//     let groupToSave = groupId ? fundToSave.groups.find(group => group.id === groupId) : fundToSave.groups[0]
//     let taskToSave = {...task}
//     if (!taskToSave.id) {
//         taskToSave.id = utilService.makeId(5)
//         await groupToSave.tasks[groupId ? 'push' : 'unshift'](taskToSave)
//     } else {
//         const taskIdx = groupToSave.tasks.findIndex(currTask => currTask.id === taskToSave.id)
//         await groupToSave.tasks.splice(taskIdx, 1, taskToSave)
//     }
//     fundToSave = await addActivity(fundToSave, type, from, to, task)
//     saveFund(fundToSave)
// }