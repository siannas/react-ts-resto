import React from "react"
import { Link } from "react-router-dom"

type Data = {
    title: string,
    date: string,
    url: string,
}

const Post = ({data}:{data:Data}) => {
    return (<Link className="blog-item" to={data.url} target="_blank">
        <h5 className="blog-item-title">{data.title}</h5>
        <p>{data.date}</p>
    </Link>)
}

export default Post