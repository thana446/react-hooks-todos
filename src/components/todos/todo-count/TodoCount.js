import { useSelector } from "react-redux"

function TodoCount() {
    const todoList = useSelector(state => state.todoList)
    const count = todoList.length
    return (
        <>
            <div>{count} item{count > 1 ? 's':''} left</div>
        </>
    )
}

export default TodoCount