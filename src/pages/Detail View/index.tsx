import React, { useState, useEffect } from "react"
import { Link, Navigate, useParams } from "react-router-dom"
import RestaurantNameRating from "./Restaurant Name & Rating"
import Section from "./Section"
import { Resto } from "../../types/resto"

const DetailView = () => {

    const { id } = useParams()

    const [data, setData] = useState<Resto | null>(null)

    useEffect(()=>{
        fetch('https://my-json-server.typicode.com/siannas/react-ts-resto/restos?name='+id)
        .then(res => res.json())
        .then((actualData) => {
            setData(actualData[0])
        })
        .catch(()=>{
            return <Navigate to={'/'}/>
        })
    },[])

    if(!data){ 
        console.log(data)
        return <p>Fetching resto details...</p>

    }

    return (<>
        <RestaurantNameRating data={data} />
        <div className="divider"></div>
        <div className="container-md">
            {/* BREADCRUMB */}
            <div className="d-flex align-items-center my-3">
                <Link to={'/'}><button className="btn btn-link border-0 px-0" style={{textDecoration: 'none'}}>Home</button></Link>
                <span className="mx-2">/</span>
                <p className="m-0" > Resto</p>
            </div>
        </div>
        <div className="divider"></div>
        <Section data={data} />
    </>)
}

export default DetailView