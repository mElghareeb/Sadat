import React from 'react';
import { Link } from 'react-router-dom';
import { I18n } from 'react-redux-i18n';
import { Badge, Avatar, Popover, Menu, Button } from 'antd';
import {
    PlusSquareFilled, ArrowDownOutlined, ArrowUpOutlined, HistoryOutlined, UserOutlined, RightCircleOutlined
} from '@ant-design/icons';
import NewDocumentModal from '../new-document-modal';

class SideMenu extends React.Component {
    state = {
        showNewDocument: false,
    };

    showNewDocumentModal = (showNewDocument) => {
        this.setState({ showNewDocument });
    }
    render() {
        return (
            <div>

                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    className='app-side-menu'
                >

                    <Menu.Item className='new-document-btn' key="0" icon={<PlusSquareFilled style={{ fontSize: '22px'}}/>} onClick={() => this.showNewDocumentModal(true)}>
                        <div className="new-document-btn-container">{I18n.t("dashboard.newDocument")} <RightCircleOutlined /></div>
                    </Menu.Item>

                    <Menu.Item key="1" icon={<Link to='/internal-documents'><div className='side-icon-container'><ArrowDownOutlined /></div></Link>}>
                        <Link to='/internal-documents'>
                        <div className="new-document-btn-container">{I18n.t("dashboard.internalDocuments")} <Badge count={4} /></div>
                        </Link>
                    </Menu.Item>

                    <Menu.Item key="2" icon={<Link to='/external-documents'><div className='side-icon-container'><ArrowUpOutlined /></div></Link>}>
                        <Link to='/external-documents'>
                        <div className="new-document-btn-container">{I18n.t("dashboard.externalDocuments")} <Badge count={4} /></div>
                    </Link>
                    </Menu.Item>

                    <Menu.Item key="3" icon={<Link to='/history'><HistoryOutlined style={{ fontSize: '20px'}}/></Link>}>
                        <Link to='/history'>
                        {I18n.t("dashboard.history")}
                    </Link>
                    </Menu.Item>

                    <Menu.Item key="4" icon={<Link to='/users'><UserOutlined style={{ fontSize: '20px'}}/></Link>}>
                        <Link to='/users'>
                        {I18n.t("dashboard.users")}
                    </Link>
                    </Menu.Item>
                </Menu>
                <NewDocumentModal showModal={this.state.showNewDocument} showNewDocumentModal={this.showNewDocumentModal} />
            </div>

        );
    }
}

export default SideMenu;
