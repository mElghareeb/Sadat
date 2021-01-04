import React, { useEffect, useState } from 'react';
import { Card, Avatar, Spin, Row, Col, Button, Modal, Upload, Input, Pagination } from 'antd';
import { EditOutlined, DeleteFilled, CloudUploadOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import './style.scss'
import { useDispatch, useSelector } from "react-redux";
import { addPhoto, deletePhotoAction, getPhotosAction } from "./actions";
import { Link } from 'react-router-dom';
import { I18n } from 'react-redux-i18n';
import AddPhotoModal from './add-photo-modal';



function Photos() {
    const { Meta } = Card;
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);
    const photos: any = useSelector((state) => state.photos);
    const [image, setImage] = useState({ preview: "", raw: "" });
    const [currentPage, setCurrentPage] = useState(1);
    const [imageTitle, setImageTitle] = useState('')
    const handleChange = e => {
        if (e.target.files.length) {
            setImage({
                preview: URL.createObjectURL(e.target.files[0]),
                raw: e.target.files[0]
            });
        }
    };

    const handleUpload = async () => {
        //   e.preventDefault();

        console.log('uplooood')
        setCurrentPage(1);

        dispatch(addPhoto(imageTitle, image))
    };

    const fileList = [];
    useEffect(() => {
        dispatch(getPhotosAction(currentPage));
    }, []);

    useEffect(() => {
        console.log('photos-----', photos.data)
    }, [photos])

    const handleOk = e => {
        console.log(e);
        if (imageTitle.length) {
            handleUpload();
            setVisible(false)
        }
        else {
            alert('الرجاء كتابة عنوان للصورة')
        }
    };

    const handleCancel = e => {
        console.log(e);
        setVisible(false)

    };

    function confirm(photoId) {
        console.log('confi')
        Modal.confirm({
            title: 'حذف الصورة',
            icon: <ExclamationCircleOutlined />,
            content: 'هل تريد فعلا حذف الصورة؟؟',
            okText: 'حذف الصورة',
            cancelText: 'رجوع',
            onOk() {
                setCurrentPage(1);

                dispatch(deletePhotoAction(photoId));
            }
        });
    }

    function onChange (page){
        console.log('console.log(page);', page);
        setCurrentPage(page);
        dispatch(getPhotosAction(page));
    }

    return (

        <div className="page-container">
            <div className="page-header">
                <div className="page-title">الصور</div>
                <Button className="add-new-btn" onClick={() => setVisible(true)}>اضف صورة</Button>
            </div>
            {photos.isLoading ? (
                <Spin />
            ) : (
                    <Row gutter={[16, 16]} className='news-container'>
                        {photos.data && photos.data.map((photosItem, i) => {
                            return (
                                <Col className="gutter-row" key={i} xs={24} sm={12} md={6} lg={6} xl={6}>
                                    <Card
                                        style={{ width: '100%' }}
                                        key={i}
                                        cover={
                                            <img
                                                alt={photosItem.title}
                                                src={photosItem.image}
                                            />
                                        }
                                        actions={[
                                            <div onClick={() => {
                                                confirm(photosItem.id)
                                                // dispatch(deletePhotoAction(photosItem.photoId));
                                            }}>
                                                <DeleteFilled key="delete" color='#FF0000' onClick={() => {
                                                    confirm(photosItem.photoId)
                                                    // 
                                                }} /> جذف الصورة</div>,
                                            // <EditOutlined key="edit" />,
                                            // <EllipsisOutlined key="ellipsis" />,
                                        ]}
                                    >
                                        <Meta
                                            // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                            title={photosItem.title}
                                        // description={photosItem.title}
                                        />
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                )}


            <Modal
                title="ارفق الصورة بالعنوان"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <div>
                    <Input placeholder="اكتب عنوان الصورة" value={imageTitle} onChange={(e) => setImageTitle(e.currentTarget.value)} />
                    <br />
                    <label className='upload-label' htmlFor="upload-button">
                        {image.preview ? (
                            <img src={image.preview} alt="dummy" width="300" height="300" />
                        ) : (
                                <div className='upload-photos-btn'>
                                    <CloudUploadOutlined />
                                    <h5 className="text-center">إرفق الصورة</h5>
                                </div>
                            )}
                    </label>
                    <input
                        type="file"
                        id="upload-button"
                        style={{ display: "none" }}
                        onChange={handleChange}
                    />
                    <br />
                    {/* <button onClick={handleUpload}>Upload</button> */}
                </div>
            </Modal>
            {(photos.count> 10) && <Pagination current={currentPage} onChange={(page)=>onChange(page)} total={photos.count} />}

        </div>
    );

}

export default Photos;
