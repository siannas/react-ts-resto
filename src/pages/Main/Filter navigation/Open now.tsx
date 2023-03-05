import React from "react"
import { useMainContext } from "../provider"

const OpenNow = () => {
    const { filter, setFilter } = useMainContext()

    const onChange = () => setFilter({isOpen: !filter.isOpen})
    
    return (<div className="form-check">
        <input className="form-check-input" type="checkbox" checked={filter.isOpen} onChange={onChange} ></input>
        <label className="form-check-label">Open Now</label>
    </div>)
}

export default OpenNow