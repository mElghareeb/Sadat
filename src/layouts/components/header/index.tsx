import React from 'react';
import { Link } from 'react-router-dom';
import { I18n } from 'react-redux-i18n';
import { Badge, Avatar, Popover } from 'antd';
import { SettingOutlined, BellOutlined } from '@ant-design/icons';


function Header() {
    const notifications = (
        <div>
            <p>notification</p>
            <p>notification</p>
        </div>
    );
    const settings = (
        <div>
            <p>setting</p>
            <p>setting</p>
        </div>
    );
    const profile = (
        <div>
            <p>profile</p>
            <p>profile</p>
        </div>
    );
    return (
        <header className='header-container'>
            <div className="right-side">
                <div className="logo-container">
                    <img src="/public/assets/images/logo.png" alt="" className='logo' />
                </div>

                <div className="links-container">
                    <Link className='header-link' to='/dashboard'>{
                        I18n.t('dashboard')
                    }</Link>

                    <Link className='header-link' to='/reports'>{
                        I18n.t('reports')
                    }</Link>
                </div>
            </div>
            <div className="controls-container">
                <Popover className='control-btn' placement="bottom" content={settings} trigger="click">
                    <Avatar style={{ backgroundColor: 'white', color: '#222', verticalAlign: 'middle' }} size={50} icon={<SettingOutlined />} />
                </Popover>

                <Popover className='control-btn' placement="bottom" content={notifications} trigger="click">
                    <Badge dot={true}>
                        <Avatar style={{ backgroundColor: 'white', color: '#222', verticalAlign: 'middle' }} size={50} icon={<BellOutlined />} />
                        <a href="#" className="head-example" />
                    </Badge>
                </Popover>

                <Popover className='control-btn' placement="bottom" content={profile} trigger="click">

                    <Avatar style={{ backgroundColor: 'orange', verticalAlign: 'middle' }} size={35}>
                        U
                    </Avatar>
                </Popover>
            </div>
        </header>
    );
}

export default Header;
