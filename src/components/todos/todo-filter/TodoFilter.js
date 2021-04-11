import { useDispatch, useSelector } from "react-redux"

function TodoFilter() {
    const todoFilter = useSelector(state => state.filter)
    const dispatch = useDispatch()
    const filterList = ['All' ,'Active' ,'Complete']
    const onSelectFilter = (filter) => {
        dispatch({type: 'SELECT_FILTER' ,filter})
    }
    const addClassActive = (filter) => (filter === todoFilter ? 'active':'')
    return (
        <div>
            {filterList && filterList.map((item) => (
                <div key={item} className={"btn btn-light "+addClassActive(item)} onClick={() => onSelectFilter(item)}>{item}</div>
            ))}
        </div>
    )
}

export default TodoFilter