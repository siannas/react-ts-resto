import React, {useState} from "react"
import Image from "./Image"
import Name from "./Name"
import Rating from "./Rating"
import Text from "./Text"
import "./index.scss"
import { Review } from "../../../../types/resto"


const ReviewItem = ({data}:{data:Review}) => {

    return (<>
        <div className="d-flex col-12 my-4 flex-column-reverse flex-sm-row">
            <div className="flex-grow-1">
                <Name name={data.name} />
                <Rating total={data.rating} />
                <Text>
                    {data.text}
                </Text>
            </div>
            <Image src={data.image} />
        </div>
        <div className="divider"></div>
    </>)
}

export default ReviewItem