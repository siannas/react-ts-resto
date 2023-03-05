import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Data = {
    title: string,
    date: string,
    url?: string,
    desc: string,
    type: string
}

const Project = ({data}:{data:Data}) => {
    function openTab(url) {
        if(!url) return;
        window.open(url);
    }

    return (<div className="project-item" onClick={()=>openTab(data.url)}>
        <div className="project-image">

        </div>
        {
            data.url ? 
            <div className="float-end p-3" style={{color: '#006bff'}}>
                <FontAwesomeIcon icon={['fas','link']}/>
            </div>
            : ''
        }
        <div className="project-sub-item d-flex">
            <div className={"project-logo h-100 "+data.type+"-logo"}>
                
            </div>
            <div className="project-item-desc flex-grow-1">
                <h5 className="project-title">{data.title}</h5>
                <p className="project-text-description">{data.desc}</p>
                <p>{data.date}</p>
            </div>
        </div>
    </div>)
}

export default Project