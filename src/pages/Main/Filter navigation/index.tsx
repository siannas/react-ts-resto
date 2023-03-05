import React from "react"
import Categories from "./Categories"
import OpenNow from "./Open now"
import Price from "./Price"
import { useMainContext } from "../provider"

const FilterNavigation = () => {
    const { setFilter } = useMainContext()

    const ClearFilter = () => {
        setFilter({
            isOpen: false,
            price: 0,
            category: "",
        })
    }

    return (
    <>
    <div className="container-md">
        <div className="d-flex align-items-sm-center align-items-end gap-2 flex-sm-row flex-column my-3">
            <p className="mx-0 mt-0" style={{marginBottom: "0.125rem"}}>Filter By:</p>
            <OpenNow/>
            <Price/>
            <Categories/>
            <button className="btn btn-outline-dark ms-auto rounded-0" 
                type="button"
                onClick={ClearFilter} >
                CLEAR ALL
            </button>
        </div>
    </div>
    <div className="divider"></div>
    </>)
}

export default FilterNavigation