import React from 'react'
import ReactDOM from 'react-dom/client'

import './global.sass'
import './styles/index.sass'

import { RouterProvider } from "react-router-dom";
import { Router } from "./router";
import store from './store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)

const App = () => {
    return <>
      <Provider store={store}>
        <React.StrictMode>
          <RouterProvider router={Router}/>
        </React.StrictMode>
      </Provider>
    </>
};

root.render(<App />);
