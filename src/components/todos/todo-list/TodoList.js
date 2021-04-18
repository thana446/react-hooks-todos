import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './TodoList.scss'

function TodoList() {
    const todoList = useSelector(state => state.todoList)
    const todoFilter = useSelector(state => state.filter)
    const dispatch = useDispatch()
    return (
        <>
            {todoList && todoList
            .filter(item => {
                switch(todoFilter) {
                    case 'Active':
                        return !item.checked
                    case 'Complete':
                        return item.checked
                    default: 
                        return true
                }
            })
            .map((item ,i ,arr) => (
            <div className="todo-list" key={i}>
                <div className="form-check ml-2">
                {todoFilter === 'All' && 
                    <input className="form-check-input" type="checkbox" checked={item.checked} name={'checkbox'+i} id={'checkbox'+i} onChange={() => dispatch({type: 'TOGGLE_CHECK' ,index: i})}/>
                }
                </div>
                <span>{item.data}</span>
                {todoFilter === 'All' && <div className="delete" onClick={() => dispatch({type: 'REMOVE' ,index: i})} style={{float:'right'}}>x</div>}
            </div>
            ))}
        </>
    )
}

export default TodoList