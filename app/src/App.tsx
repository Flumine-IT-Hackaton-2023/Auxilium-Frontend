import React from 'react'
import ReactDOM from 'react-dom/client'

import './global.sass'
import './styles/index.sass'

import { RouterProvider } from "react-router-dom";
import { Router } from "./router";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)

const App = () => {
    return <>
        <React.StrictMode>
            <RouterProvider router={Router}/>
        </React.StrictMode>
    </>
};

root.render(<App />);