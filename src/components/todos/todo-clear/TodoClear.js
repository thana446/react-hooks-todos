import { useDispatch } from "react-redux"

function TodoClear() {
    const dispatch = useDispatch()
    return (
        <>
            <div className="btn btn-link" onClick={() => dispatch({type: 'CLEAR'})}>clear</div>
        </>
    )
}

export default TodoClear