import React from "react"
import { useMainContext } from "../provider"

const Price = () => {
    const { filter, setFilter } = useMainContext()
    
    const onChange = (e) => {
        e.preventDefault()
        setFilter({price: e.target.value})
    }

    return (<>
        <select className="form-select rounded-0" style={{width:"fit-content"}} value={filter.price} onChange={onChange}>
            <option value={0}>Price</option>
            <option value={1}>$</option>
            <option value={2}>$$</option>
            <option value={3}>$$$</option>
            <option value={4}>$$$$</option>
        </select>
    </>)
}

export default Price