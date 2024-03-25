import React from 'react';
import './App.css';
import {Outlet} from "react-router-dom";
import HeaderMenu from "./components/headerMenu";
import Layout, {Content, Header} from "antd/es/layout/layout";

function App() {
    return (
        <div className="App">
            <HeaderMenu/>
            <div className={"content"}>
                <Outlet/>
            </div>
        </div>
    );
}

export default App;
