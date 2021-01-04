import React from 'react';
import { Link } from 'react-router-dom';
import { I18n } from 'react-redux-i18n';
import { Badge, Avatar, Popover, Menu, Button } from 'antd';
import {
    PlusSquareFilled, ArrowDownOutlined, ArrowUpOutlined, HistoryOutlined, UserOutlined, RightCircleOutlined, FolderOutlined
} from '@ant-design/icons';

class SideMenu extends React.Component {
    state = {
        showNewDocument: false,
    };


    render() {
        return (
            <div>

                <Menu
                    // defaultSelectedKeys={['1']}
                    // defaultOpenKeys={['sub1']}
                    mode="inline"
                    className='app-side-menu'
                >
                    <Menu.Item>
                        <Link to={`/${window.location.pathname.split('/')[1]}/news`}>
                            <div className="menu-item-container">
                                <img src="/public/assets/images/home.png" alt="" />
                                <div className="title">الاخبار</div>
                            </div>
                        </Link>
                    </Menu.Item>

                    <Menu.Item>
                        <Link to={`/${window.location.pathname.split('/')[1]}/photos`}>
                            <div className="menu-item-container">
                                <img src="/public/assets/images/side2.png" alt="" />
                                <div className="title">الصور</div>
                            </div>
                        </Link>
                    </Menu.Item>

                    <Menu.Item>
                        <Link to={`/${window.location.pathname.split('/')[1]}/videos`}>
                            <div className="menu-item-container">
                                <img src="/public/assets/images/side3.png" alt="" />
                                <div className="title">الفيديو</div>
                            </div>
                        </Link>
                    </Menu.Item>

                    <Menu.Item>
                        <Link to={`/${window.location.pathname.split('/')[1]}/contacts`}>
                            <div className="menu-item-container">
                                <img src="/public/assets/images/side4.png" alt="" />
                                <div className="title">تواصل معنا</div>
                            </div>
                        </Link>
                    </Menu.Item>

                    <Menu.Item>
                        <Link to={`/${window.location.pathname.split('/')[1]}/jobs`}>
                            <div className="menu-item-container">
                                <img src="/public/assets/images/side5.png" alt="" />
                                <div className="title">طلبات الوظائف</div>
                            </div>
                        </Link>
                    </Menu.Item>
                    
                    <Menu.Item>
                        <Link to={`/${window.location.pathname.split('/')[1]}/internal-jobs`}>
                            <div className="menu-item-container">
                                <img src="/public/assets/images/side6.png" alt="" />
                                <div className="title">الوظائف</div>
                            </div>
                        </Link>
                    </Menu.Item>

                </Menu>
            </div>

        );
    }
}

export default SideMenu;
