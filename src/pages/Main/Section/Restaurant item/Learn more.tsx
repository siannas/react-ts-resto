import React from "react"
import { Link } from "react-router-dom"

const LearnMore = ({url}:{url:string}) => {
    return (
    <Link to={url}> 
        <button type="button" className="btn btn-primary w-100 rounded-0">LEARN MORE</button>
    </Link>)
}

export default LearnMore