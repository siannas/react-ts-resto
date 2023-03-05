import React from "react"
import RatingItem from "../../../Main/Section/Restaurant item/Rating"

const Rating = ({total}:{total:number}) => {
    return (<RatingItem total={total} className="mb-2" />)
}

export default Rating