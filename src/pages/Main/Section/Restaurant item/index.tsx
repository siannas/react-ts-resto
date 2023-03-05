import React, { useEffect, useMemo } from "react"
import { Resto } from "../../../../types/resto"
import { useMainContext } from "../../provider"
import Category from "./Category"
import RestoImage from "./Image"
import LearnMore from "./Learn more"
import OpenClosed from "./Open closed"
import PriceRange from "./Price range"
import Rating from "./Rating"
import RestaurantName from "./Restaurant name"

const RestaurantItem = ({data, uid}:{data:Resto, uid:number}) => {
    const { filter } = useMainContext()
    const imageSrc = data.reviews[0]?.image || null

    const getRating = useMemo(():number => {
        var rate = 0;
        for (const x of data.reviews) {
            rate+=x.rating
        }
        return (rate / data.reviews.length)
    },[data]) 


    return (<div className="col-md-3 col-sm-6 resto-item mb-5"
        hidden={((filter.price!=0 && filter.price!=data.price) || (filter.isOpen && data["is-open"]!==1))}
        >
        <RestoImage src={imageSrc}/>
        <RestaurantName title={data.name} />
        <Rating total={getRating} />
        <div className="d-flex justify-content-between mt-2">
            <div>
                <Category title={data.category} /> - <PriceRange total={data.price} />
            </div>
            <OpenClosed isOpen={data["is-open"]===1} />
        </div>
        <LearnMore url={'/detail/'+data.name}/>
    </div>)
}

export default RestaurantItem