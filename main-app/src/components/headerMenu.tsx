import React, {useEffect, useState} from 'react';
import {AppstoreOutlined, HomeOutlined, MailOutlined, SettingOutlined, UserOutlined} from '@ant-design/icons';
import type {MenuProps} from 'antd';
import {Menu} from 'antd';
import {Link, useLocation} from "react-router-dom";

const items: MenuProps['items'] = [
    {
        label: (<Link to={``}>首页</Link>),
        key: '/',
        icon: <HomeOutlined/>
    },
    {
        label: (<Link to={`introduce`}>介绍</Link>),
        key: '/introduce',
        icon: <AppstoreOutlined/>
    },
    {
        label: (<Link to={`private`}>我的</Link>),
        key: '/private',
        icon: <UserOutlined/>
    },
];

const HeaderMenu: React.FC = () => {
    const location = useLocation();
    const [current, setCurrent] = useState('');
    useEffect(() => {
        setCurrent(location.pathname);
        // setCurrent(e.key);
    })
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return (
        <div>
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}/>
        </div>
    )
};

export default HeaderMenu;