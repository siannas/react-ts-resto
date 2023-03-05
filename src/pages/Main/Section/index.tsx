import React, { useEffect, useState } from "react"
import RestaurantItem from "./Restaurant item"
import { useMainContext, MainProviderData, Filter } from "../provider"
import usePrevious from "../../../hooks/usePrevious"

const Section = () => {
    const {data,
        setData,
        isFetching,
        setFetching,
        filter} = useMainContext() as MainProviderData

    const prevFilter = usePrevious(filter)

    const [shown, setShown] = useState<number>(0)

    function ClientSideFiltering(actualData:typeof data){
        var cnt = 0
        for(const x of actualData)
        {
            if(filter.price!=0 && filter.price!=x.price) continue
            else if(filter.isOpen && x["is-open"]!==1) continue
            cnt++
        }
        setShown(cnt)
    }

    useEffect(()=>{
        if(!prevFilter || (prevFilter as Filter).category !== filter.category )
        {
            setFetching(true)

            var params ='?'
            if(filter.category!=='')
            {
                params+='category='+filter.category
            }

            fetch('https://my-json-server.typicode.com/siannas/react-ts-resto/restos'+params)
            .then(res => res.json())
            .then((actualData) => {
                ClientSideFiltering(actualData)
                setData(actualData)
            })
            .finally(()=>{
                setFetching(false)
            })
        }
        else
        {
            ClientSideFiltering(data)
        }
    },[filter])

    return (<section className="container-md">
            <div className="row">
                <h3 className="mt-4 mb-3">All Restaurants</h3>
                {
                    isFetching ? "Fetching data.." :
                    data.map((x,i) => <RestaurantItem key={i} uid={i} data={x}/>)
                }
                {
                    (!isFetching && (shown===0 || data.length === 0)) ? <p>No data found</p> : ''
                }
            </div>
    </section>)
}

export default Section