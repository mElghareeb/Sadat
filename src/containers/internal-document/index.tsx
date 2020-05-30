import React from 'react';
import { Modal, Row, Col, Form, DatePicker, Button, Input, Select, Upload, Card, List, Avatar, Mentions } from 'antd';
import {
    CloudDownloadOutlined, RightCircleOutlined
} from '@ant-design/icons';
import './style.scss';

const documents = [
    {
        title: 'Internal Document 1',
    },
    {
        title: 'Internal Document  2',
    },

];
const attatchments = [{
    title: 'Internal Document  3',
},
{
    title: 'Internal Documente 4',
},]
const { Option } = Mentions;


class InternalDocument extends React.Component<{ match }> {

    renderPriorty = () => {

    }

    render() {
        console.log('match', this.props.match)

        return (
            <div className="document-container">
                <Row gutter={[16, 16]}>
                    <Col xs={24} sm={24} md={10} lg={10}>
                        <div className="form-container ">
                            <Card>
                                <h1 className='document-title'>Internal Document number {this.props.match.params.id} for marketing department</h1>
                                <div className="item-container">
                                    <div className="item-title ref-code">Refrence code:</div>
                                    <div className="item-value ref-code">RAF10298</div>
                                </div>
                                <div className="v-line"></div>
                                <div className="item-container">
                                    <div className="item-title">Date:</div>
                                    <div className="item-value">10/12/2020</div>
                                </div>
                                <div className="item-container">
                                    <div className="item-title">From:</div>
                                    <div className="item-value">Legal Department</div>
                                </div>
                                <div className="item-container">
                                    <div className="item-title">Priorty:</div>
                                    <div className="item-value"><div className="priorty-icon-container"><img src="/public/assets/images/heart.png" alt="" /></div></div>
                                </div>
                            </Card>

                            <div className="documents-files-container">
                                <h3>Documents</h3>
                                <List
                                    itemLayout="horizontal"
                                    dataSource={documents}
                                    renderItem={item => (
                                        <List.Item>
                                            <List.Item.Meta
                                                avatar={<Avatar shape="square" size={30} src="/public/assets/images/list.png" />}
                                                title={item.title}
                                            />
                                            <Avatar style={{ backgroundColor: 'white', color: '#222' }} size={40} icon={<CloudDownloadOutlined />} />
                                        </List.Item>
                                    )}
                                />
                            </div>
                            <div className="documents-files-container">
                                <h3>Attatchments</h3>
                                <List
                                    itemLayout="horizontal"
                                    dataSource={attatchments}
                                    renderItem={item => (
                                        <List.Item>
                                            <List.Item.Meta
                                                avatar={<Avatar shape="square" size={30} src="/public/assets/images/list.png" />}
                                                title={item.title}
                                            />
                                            <Avatar style={{ backgroundColor: 'white', color: '#222' }} size={40} icon={<CloudDownloadOutlined />} />
                                        </List.Item>
                                    )}
                                />
                            </div>
                        </div>
                    </Col>
                    <Col xs={24} sm={24} md={14} lg={14}>
                        <h3>Document Log</h3>
                        <Card>
                            <div className="status-btns-container">
                                <Button className='status-btn'>Irrelevant</Button>
                                <Button className='status-btn'>In-progress</Button>
                                <Button className='status-btn'>Completed</Button>
                                <Button className='status-btn'>Rrchived</Button>
                            </div>
                            <div className="comment-form-container">
                                <Mentions style={{ width: '100%' }} placement="top" rows="4" placeholder="Write a comment">
                                    <Option value="afc163">Mahmoud</Option>
                                    <Option value="zombieJ">Ahmed</Option>
                                    <Option value="yesmeck">Waleed</Option>
                                    <Option value="yesmeck">Kareem</Option>
                                </Mentions>
                                <Button className='update-btn' type="primary" icon={<RightCircleOutlined />}>
                                    Update
    </Button>
                            </div>
                        </Card>

                        <div className="comments-container">
                            <div className="comment-container">
                                <div className="user-date-info">
                                    Legal Department, 02 Jan 2020, 12:08 pm
                                </div>
                                <Card>
                                <div className="comment-value">
                                    <div className="comment-txt">Irrelevant Document, redirected to marketing</div>
                                    <div className="comment-priorty">Irrelevant</div>
                                </div>
                                </Card>
                            </div>

                            <div className="comment-container">
                                <div className="user-date-info">
                                    Legal Department, 02 Jan 2020, 12:08 pm
                                </div>
                                <Card>
                                <div className="comment-value">
                                    <div className="comment-txt">Irrelevant Document, redirected to marketing</div>
                                    <div className="comment-priorty">Irrelevant</div>
                                </div>
                                </Card>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default InternalDocument;
