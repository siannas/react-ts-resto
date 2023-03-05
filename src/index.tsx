import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.scss'

const root = createRoot(
    document.getElementById('app') as HTMLElement
)

root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)