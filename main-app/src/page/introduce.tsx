import React, {useState} from 'react';
import {AppstoreOutlined, HomeOutlined, MailOutlined, SettingOutlined} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Menu} from 'antd';
import {Link} from "react-router-dom";
import CalenderModule from "../components/CalenderModule";

const Introduce: React.FC = () => {

    return <div className={"introduce"}>
        <CalenderModule/>
    </div>;
};

export default Introduce;