import React, { ReactNode } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

const Rating = ({total, className}:{total:number, className?: string}) => {

    const star:number = Math.max(0, Math.min(5, total))
    const half:number = Math.ceil(star % 1)
    
    const Stars = (x:number, icon:IconProp) => {
        var indents:ReactNode[] = []
        for (let i = 0; i < x; i++) 
        {
            indents.push(<FontAwesomeIcon key={i} icon={icon}/>)
        }
        return indents
    }

    return (<div className={className || ''}>
        {Stars(Math.floor(star), ['fas', 'star'])}
        {Stars(half, ['far', 'star-half-stroke'])}
        {Stars(5-star-half, ['far', 'star'])}
    </div>)
}

export default Rating