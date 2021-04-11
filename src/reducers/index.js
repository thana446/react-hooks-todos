import { combineReducers } from "redux"

let todoInit = []

function todoListReducer(state=todoInit ,action) {
    switch(action.type) {
        case 'SUBMIT':
            return [...state ,action.data]
        case 'TOGGLE_CHECK':
            let {index} = action
            state[index].checked = !state[index].checked
            return [...state]
        case 'REMOVE':
            state.splice(action.index ,1)
            return [...state]
        case 'CLEAR':
            return todoInit
        default:
            return state
    }
}

let filterInit = "All"

function filterReducer(state=filterInit ,action) {
    switch(action.type) {
        case 'SELECT_FILTER':
            return action.filter
        default:
            return state
    }
}

const reducer = combineReducers({
    todoList: todoListReducer,
    filter: filterReducer
})

export default reducer