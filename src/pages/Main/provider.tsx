import React, { createContext, useContext, ReactNode, useMemo, useState, useReducer } from "react"
import { Resto } from "../../types/resto"

type Filter = {
    isOpen: boolean,
    price: number,
    category: string,
}

type MainProviderData = {
    data: Resto[],
    setData: any,
    isFetching: boolean, 
    setFetching: any,
    filter: Filter,
    setFilter: any
}

const MainContext = createContext({} as MainProviderData)

const MainProvider = ({children}:{children:ReactNode}) => {
    const [isFetching, setFetching] = useState<boolean>(true);
    const [data, setData] = useState<Resto[]>([]);
    const [filter, setFilter] = useReducer((oldstate, action) => {
        return {
            ...oldstate,
            ...action
        }
    }, {
        isOpen: false,
        price: 0,
        category: "",
    })

    const value = useMemo(()=>({
        data,
        setData,
        isFetching, 
        setFetching,
        filter,
        setFilter
    }),[data, isFetching, filter])

    return (
        <MainContext.Provider value={value}>{children}</MainContext.Provider>
    )
}

const useMainContext = ():MainProviderData => useContext(MainContext)

export { MainProvider, useMainContext, MainProviderData, Filter }