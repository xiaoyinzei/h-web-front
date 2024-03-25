import React from 'react';
import {createBrowserRouter,} from "react-router-dom";
import App from "../App";
import Introduce from "../page/introduce";
import Private from "../page/private";
import ErrorPage from "./error-page";
import Home from "../page/home";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/private",
                element: <Private/>,
            },
            {
                path: "/introduce",
                element: <Introduce/>,
            },
            {
                path: "/",
                element: <Home/>,
            }
        ]
    },
]);