import React, { createContext, useEffect, useState } from "react"
import FilterNavigation from "./Filter navigation"
import Section from "./Section"
import { MainProvider } from "./provider"

const Main = () => {

    return (<MainProvider>
        <div className="container-md">
            <h1 className="mt-5 mb-2">Restaurant</h1>
            <p className="my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia officiis optio sed nihil aperiam repudiandae sequi, ad suscipit, fugiat porro consectetur? Recusandae necessitatibus unde culpa aliquam voluptas commodi. Dignissimos, laboriosam!</p>
        </div>
        <div className="divider"></div>
        <FilterNavigation/>
        <Section />
    </MainProvider>)
}

export default Main