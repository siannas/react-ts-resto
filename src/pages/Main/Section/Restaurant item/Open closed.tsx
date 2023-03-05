import React from "react"

const OpenClosed = ({isOpen}:{isOpen:boolean}) => {
    return isOpen ? 
        <p className="indicator-on" >OPEN NOW</p> :
        <p className="indicator-off" >CLOSED</p>
}

export default OpenClosed