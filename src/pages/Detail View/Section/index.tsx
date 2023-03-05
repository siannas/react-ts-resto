import React from "react"
import ReviewItem from "./Review item"
import { Resto } from "../../../types/resto"

const Section = ({data}:{data:Resto}) => {
    return (<section className="container-md">
        <div className="row">
            <h3 className="mt-4 mb-3">Reviews</h3>
            {
                data.reviews?.map((x,i)=><ReviewItem key={i} data={x}/>)
            }
        </div>
    </section>)
}

export default Section