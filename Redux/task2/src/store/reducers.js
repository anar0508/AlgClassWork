import * as ActionsList from './ActionsList';


const initialState = {
    articles: [
        {
            name: "Статья 1",
            description: "Описание 1",
            author: "Автор 1",
            time: "10:52"
        },
        {
            name: "Статья 2",
            description: "Описание 2",
            author: "Автор 2",
            time: "14:52"
        },
        {
            name: "Статья 3",
            description: "Описание 3",
            author: "Автор 3",
            time: "9:48"
        },
        {
            name: "Статья 4",
            description: "Описание 4",
            author: "Автор 4",
            time: "12:35"
        }],
    balance: 3000
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionsList.CHANGE_BALANCE:
            return {
                ...state, balance: state.balance - Number(action.payload)
            }

        default:
            return state
    }
}
