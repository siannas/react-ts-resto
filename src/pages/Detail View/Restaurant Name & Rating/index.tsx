import React, { useMemo } from "react"
import Rating from "../../Main/Section/Restaurant item/Rating"
import Category from "../../Main/Section/Restaurant item/Category"
import OpenClosed from "../../Main/Section/Restaurant item/Open closed"
import PriceRange from "../../Main/Section/Restaurant item/Price range"
import { Resto } from "../../../types/resto"

const RestaurantNameRating = ({data}:{data:Resto}) => {
    
    const getRating = useMemo(():number => {
        var rate = 0;
        for (const x of data.reviews) {
            rate+=x.rating
        }
        return (rate / data.reviews.length)
    },[data]) 

    return (<div className="container-md">
        <h1 className="mt-5 mb-2">{data.name}</h1>
        <div className="mt-4">
            <span className="mr-3">Rating: </span>
            <Rating className="d-inline-block" total={getRating} />
        </div>
        <div className="d-flex justify-content-between mt-2 mb-4">
            <div>
                <Category title={data.category} /> - <PriceRange total={data.price} />
            </div>
            <OpenClosed isOpen={1===1} />
        </div>
    </div>)
}

export default RestaurantNameRating