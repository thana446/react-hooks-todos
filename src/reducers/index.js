import { combineReducers } from "redux"

let todoInit = []

function todoListReducer(state=todoInit ,action) {
    switch(action.type) {
        case 'SUBMIT':
            return [...state ,action.data]
        case 'TOGGLE_CHECK':
            let {index} = action
            const todoList = [...state]
            todoList[index].checked = !todoList[index].checked
            return todoList
        case 'REMOVE':
            return [...state.filter((item,i) => i !== action.index)]
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