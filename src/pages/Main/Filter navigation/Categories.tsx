import React from "react"
import { useMainContext } from "../provider"

const Categories = () => {
    const { filter, setFilter } = useMainContext() 
    const onChange = (e) => {
        e.preventDefault()
        setFilter({category: e.target.value})
    }

    return (<>
        <select className="form-select rounded-0" style={{width:"fit-content"}} value={filter.category} onChange={onChange}>
            <option value={""}>Categories</option>
            <option value={"ITALIAN"}>ITALIAN</option>
            <option value={"JAPANESE"}>JAPANESE</option>
            <option value={"AMERICAN"}>AMERICAN</option>
        </select>
    </>)
}

export default Categories