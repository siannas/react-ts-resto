import React from "react"

const RestoImage = ({src}:{src:string | null}) => {
    return (<div className="resto-item-image">
        {
            src ? 
            <img src={'https://raw.githubusercontent.com/siannas/react-ts-resto/main/photos/'+src}></img> 
            : ''
        }
    </div>)
}

export default RestoImage