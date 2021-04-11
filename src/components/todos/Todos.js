import Input from "./input/Input"
import TodoList from "./todo-list/TodoList"
import TodoCount from "./todo-count/TodoCount"
import './Todos.scss'
import TodoClear from "./todo-clear/TodoClear"
import TodoFilter from "./todo-filter/TodoFilter"

function Todos() {
    return (
        <div className="row">
            <div className="col-12">
                <div className="todos">
                    <Input />
                    <TodoList />
                    <div className="my-flex">
                        <TodoCount />
                        <TodoFilter />
                        <TodoClear />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todos