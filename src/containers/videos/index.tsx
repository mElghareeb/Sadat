import React, { useEffect, useState } from 'react';
import { Card, Avatar, Spin, Row, Col, Button, Modal, Upload, Input } from 'antd';
import { EditOutlined, DeleteFilled, CloudUploadOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import './style.scss'
import { useDispatch, useSelector } from "react-redux";
import { addVideo, deleteVideoAction, getVideosAction } from "./actions";
import { Link } from 'react-router-dom';
import { I18n } from 'react-redux-i18n';
import renderHTML from 'react-render-html';



function Videos() {
    const { Meta } = Card;
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);
    const videos: any = useSelector((state) => state.videos);
    const [videoUrl, setVideoUrl] = useState('');
    const [imageTitle, setImageTitle] = useState('')


    const handleUpload = async () => {
        //   e.preventDefault();

        console.log('uplooood')
        dispatch(addVideo(imageTitle, videoUrl))
    };

    const fileList = [];
    useEffect(() => {
        dispatch(getVideosAction());
    }, []);

    useEffect(() => {
        console.log('videos-----', videos.data)
    }, [videos])

    const handleOk = e => {
        console.log(e);
        if (imageTitle) {
            handleUpload();
            setVisible(false)
        }
        else {
            alert('الرجاء كتابة عنوان للفيديو')
        }
    };

    const handleCancel = e => {
        console.log(e);
        setVisible(false)

    };

    function confirm(videoId) {
        console.log('confi')
        Modal.confirm({
            title: 'حذف الفيديو',
            icon: <ExclamationCircleOutlined />,
            content: 'هل تريد فعلا حذف الفيديو؟؟',
            okText: 'حذف الفيديو',
            cancelText: 'رجوع',
            onOk() {
                dispatch(deleteVideoAction(videoId));
            }
        });
    }

    return (

        <div className="page-container">
            <div className="page-header">
                <div className="page-title">الفيديو</div>
                <Button className="add-new-btn" onClick={() => setVisible(true)}>اضف فيديو</Button>
            </div>
            {videos.isLoading ? (
                <Spin />
            ) : (
                    <Row gutter={[16, 16]} className='news-container'>
                        {videos.data && videos.data.map((videosItem, i) => {
                            return (
                                <Col className="gutter-row" key={i} xs={24} sm={12} md={6} lg={6} xl={6}>
                                    <Card
                                        style={{ width: '100%' }}
                                        key={i}
                                        cover={
                                            <div className='video-container'>{renderHTML(videosItem.url) }</div>
                                        }
                                        actions={[
                                            <div onClick={() => {
                                                confirm(videosItem.id)
                                                // dispatch(deleteVideoAction(videosItem.videoId));
                                            }}>
                                                <DeleteFilled key="delete" color='#FF0000' onClick={() => {
                                                    confirm(videosItem.id)
                                                    // 
                                                }} /> جذف الفيديو</div>,
                                            // <EditOutlined key="edit" />,
                                            // <EllipsisOutlined key="ellipsis" />,
                                        ]}
                                    >
                                        <Meta
                                            // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                            title={videosItem.title}
                                        // description={videosItem.title}
                                        />
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                )}


            <Modal
                title="ارفق الفيديو بالعنوان"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <div>
                    <Input placeholder="اكتب عنوان الفيديو" value={imageTitle} onChange={(e) => setImageTitle(e.currentTarget.value)} />
                    <br />
                    <Input placeholder="اكتب رابط الفديو" value={videoUrl} onChange={(e) => setVideoUrl(e.currentTarget.value)} />
                    
                </div>
            </Modal>

        </div>
    );

}

export default Videos;
