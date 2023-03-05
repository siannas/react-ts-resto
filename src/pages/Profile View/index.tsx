import React from "react"
import { Link } from "react-router-dom"
import BlogPost from "./Blog post"
import Heading from "./Heading"
import "./index.scss"
import Projects from "./Projects"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ProfileView = () => {
    return (<div className="container">
        <Link to={'/'}>
            <h4 className="mt-3">
                <FontAwesomeIcon icon={['fas','caret-left']}/> 
                Back To Home
            </h4>
        </Link>
        <Heading/>
        <div className="row">
            <BlogPost/>
            <Projects/>
        </div>        
    </div>)
}

export default ProfileView