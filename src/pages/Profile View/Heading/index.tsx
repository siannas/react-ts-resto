import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Heading = () => {
    return (<section className="profile-heading text-center">
        <div className="profile-pic mt-5 mb-2"></div>
        <h3>Hi 👋, I'm Annas Nuril Iman</h3>
        <p className="mb-1">
            massive.annas@gmail.com | <span className="profile-location"><FontAwesomeIcon icon={['fas','location-dot']}/> Sidoarjo, Indonesia</span>
        </p>
        <div className="profile-sub-title">
            Full-stack Engineer disguised as a Game Dev Enthusiast
        </div>
        <div className="divider mt-5"></div>
    </section>)
}

export default Heading