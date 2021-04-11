import { useState } from "react"
import { useDispatch } from "react-redux"
import './Input.scss'

function Input() {
    const [data ,setData] = useState("")
    const dispatch = useDispatch()
    
    const clearData = () => {setData("")}
    const onKeyPress = e => {
        if(e.key === 'Enter') {
            let result = {data ,checked: false}
            dispatch({type: 'SUBMIT' ,data: result})
            clearData()
        }
    }

    return (
        <input className="form-control new-todo" placeholder="What needs to be done?" value={data} onChange={(e) => setData(e.target.value)} onKeyPress={onKeyPress}/>
    )
}

export default Input