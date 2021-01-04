import React, { useEffect, useState } from 'react';
import { Card, Avatar, Spin, Row, Col, Button, Modal, Upload, Input } from 'antd';
import { EditOutlined, DeleteFilled, CloudUploadOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import './style.scss'
import { useDispatch, useSelector } from "react-redux";
import { addInternalJob, deleteInternalJobAction, getInternalJobsAction } from "./actions";
import { Link } from 'react-router-dom';
import { I18n } from 'react-redux-i18n';
import renderHTML from 'react-render-html';



function InternalJobs() {
    const { Meta } = Card;
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);
    const internalJobs: any = useSelector((state) => state.internalJobs);
    const [internalJobUrl, setInternalJobUrl] = useState('');
    const [imageTitle, setImageTitle] = useState('')


    const handleUpload = async () => {
        //   e.preventDefault();

        console.log('uplooood')
        dispatch(addInternalJob(imageTitle))
    };

    const fileList = [];
    useEffect(() => {
        dispatch(getInternalJobsAction());
    }, []);

    useEffect(() => {
        console.log('internalJobs-----', internalJobs.data)
    }, [internalJobs])

    const handleOk = e => {
        console.log(e);
        if (imageTitle.length) {
            handleUpload();
            setVisible(false)
        }
        else {
            alert('الرجاء كتابة عنوان الوظيفة')
        }
    };

    const handleCancel = e => {
        console.log(e);
        setVisible(false)

    };

    function confirm(internalJobId) {
        console.log('confi')
        Modal.confirm({
            title: 'حذف الوظيفة',
            icon: <ExclamationCircleOutlined />,
            content: 'هل تريد فعلا حذف الوظيفة؟؟',
            okText: 'حذف الوظيفة',
            cancelText: 'رجوع',
            onOk() {
                console.log('internalJobId', internalJobId)
                dispatch(deleteInternalJobAction(internalJobId));
            }
        });
    }

    return (

        <div className="page-container">
            <div className="page-header">
                <div className="page-title">الوظائف المتاحة</div>
                <Button className="add-new-btn" onClick={() => setVisible(true)}>اضف وظيفة</Button>
            </div>
            {internalJobs && internalJobs.isLoading ? (
                <Spin />
            ) : (
                    <Row gutter={[16, 16]} className='news-container'>
                        {internalJobs &&internalJobs.data && internalJobs.data.map((internalJobItem, i) => {
                            return (
                                <Col className="gutter-row" key={i} xs={24} sm={12} md={6} lg={6} xl={6}>
                                    <Card
                                        style={{ width: '100%' }}
                                        key={internalJobItem.id}

                                        actions={[
                                            <div onClick={() => {
                                                confirm(internalJobItem.id)
                                                // dispatch(deleteInternalJobAction(internalJobsItem.internalJobId));
                                            }}>
                                                <DeleteFilled key="delete" color='#FF0000' onClick={() => {
                                                    confirm(internalJobItem.id)
                                                    // 
                                                }} /> جذف الوظيفة</div>,
                                            // <EditOutlined key="edit" />,
                                            // <EllipsisOutlined key="ellipsis" />,
                                        ]}
                                    >
                                        <Meta
                                            // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                            title={internalJobItem.name}
                                        // description={internalJobsItem.title}
                                        />
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                )}


            <Modal
                title="ارفق الوظيفة بالعنوان"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <div>
                    <Input placeholder="اكتب عنوان الوظيفة" value={imageTitle} onChange={(e) => setImageTitle(e.currentTarget.value)} />
                    <br />
                    
                </div>
            </Modal>

        </div>
    );

}

export default InternalJobs;
