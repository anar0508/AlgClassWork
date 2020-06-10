import * as ActionsList from './ActionsList'

export const changeBalance = (newBalance) => {
    return {
        type: ActionsList.CHANGE_BALANCE,
        payload: newBalance
    }
}
