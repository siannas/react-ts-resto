import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const PriceRange = ({total}:{total:number}) => {

    return (<>{
            Array(total).fill(0).map((x,i) => <FontAwesomeIcon key={i} icon={['fas','dollar-sign']}/>)
    }</>)
}

export default PriceRange