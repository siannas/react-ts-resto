import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Image = ({src}:{src:string}) => {
    return (<div className="review-item-image">
        {
            src ? 
            <img src={'https://raw.githubusercontent.com/siannas/react-ts-resto/main/photos/'+src}></img> 
            : ''
        }
        <div className="position-absolute start-0 bottom-0 review-image-icon">
            <FontAwesomeIcon icon={['far', 'image']}/>
        </div>
    </div>)
}

export default Image