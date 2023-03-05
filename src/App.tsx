import React from 'react'
import {
    createHashRouter,
    RouterProvider, 
} from'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import Main from './pages/Main'
import DetailView from './pages/Detail View'
import ProfileView from './pages/Profile View'

export default function App() {
    
    library.add(fas, far)

    const router = createHashRouter([
        {
            path: "/",
            element: <Main/>,
        },
        {
            path: "/detail/:id",
            element: <DetailView/>,
        },
        {
            path: "/profile",
            element: <ProfileView/>,
        },
    ]);
    
    return <RouterProvider router={router}></RouterProvider>
}