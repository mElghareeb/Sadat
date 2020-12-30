import React, { useEffect, useState } from 'react';
import { Card, Avatar, Spin, Row, Col, Button, Modal, Input, Pagination } from 'antd';
import { EditOutlined, ExclamationCircleOutlined, DeleteFilled, CloudUploadOutlined } from '@ant-design/icons';
import './style.scss'
import { useDispatch, useSelector } from "react-redux";
import { addNews, deleteNewsAction, getSchoolNewsAction } from "./actions";
import { Link } from 'react-router-dom';
import { I18n } from 'react-redux-i18n';
import AddNewsModal from './add-news-modal';
import ReactQuill from 'react-quill';



function News() {
    const { Meta } = Card;
    const dispatch = useDispatch();
    const schoolNews: any = useSelector((state) => state.schoolNews);
    const [visible, setVisible] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [image, setImage] = useState({ preview: "", raw: "" });
    const [newsTitle, setNewsTitle] = useState('')
    const [newsDesc, setNewsDesc] = useState('')
    
    useEffect(() => {
        dispatch(getSchoolNewsAction(currentPage));
    }, []);

    useEffect(() => {
        console.log('schoolNews-----', schoolNews.data)
    }, [schoolNews])
   
    
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

        console.log('uplooood');
        setCurrentPage(1);
        dispatch(addNews(newsTitle, newsDesc, image))
    };



    const handleOk = e => {
        console.log(e);
        if (newsTitle.length && newsDesc.length) {
            handleUpload();
            setVisible(false)
        }
        else {
            alert('الرجاء كتابة عنوان الخبر وتفاصيله')
        }
    };

    const handleCancel = e => {
        console.log(e);
        setVisible(false)

    };

    function confirm(newsId) {
        console.log('confi')
        Modal.confirm({
            title: 'حذف الخبر',
            icon: <ExclamationCircleOutlined />,
            content: 'هل تريد فعلا حذف الخبر؟',
            okText: 'حذف الخبر',
            cancelText: 'رجوع',
            onOk() {
                setCurrentPage(1);
                dispatch(deleteNewsAction(newsId));
            }
        });
    }

    function onChange (page){
        console.log('console.log(page);', page);
        setCurrentPage(page);
        dispatch(getSchoolNewsAction(page));
    }

    return (

        <div className="page-container">
            <div className="page-header">
                <div className="page-title">الاخبار</div>
                <Button className="add-new-btn"  onClick={() => setVisible(true)}>اضف خبر</Button>
            </div>
            {schoolNews.isLoading ? (
                <Spin />
            ) : (
                    <Row gutter={[16, 16]} className='news-container'>
                        {schoolNews.data && schoolNews.data.map((newsItem, i) => {
                            return (
                                <Col className="gutter-row" key={i} xs={24} sm={12} md={6} lg={6} xl={6}>
                                    <Card
                                        style={{ width: '100%' }}
                                        key={i}
                                        cover={
                                            <img
                                                alt={newsItem.title}
                                                src={newsItem.image}
                                            />
                                        }
                                        actions={[
                                            <div onClick={() => {
                                                confirm(newsItem.id)
                                                // dispatch(deletePhotoAction(photosItem.photoId));
                                            }}>
                                                <DeleteFilled key="delete" color='#FF0000' onClick={() => {
                                                    confirm(newsItem.id)
                                                    // 
                                                }} /> جذف الخبر</div>,
                                            // <EditOutlined key="edit" />,
                                            // <EllipsisOutlined key="ellipsis" />,
                                        ]}
                                    >
                                        <Meta
                                            // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                            title={newsItem.title}
                                            description={newsItem.description}
                                        />
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                )}
{(schoolNews.count> 10) && <Pagination current={currentPage} onChange={(page)=>onChange(page)} total={schoolNews.count} />}

            
<Modal
                title="ارفق الصورة بالعنوان"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <div>
                    <Input placeholder="اكتب عنوان الخبر" value={newsTitle} onChange={(e) => setNewsTitle(e.currentTarget.value)} />
                    <br />
                    {/* <Input className='desc-input' placeholder="اكتب تفاصيل الخبر" value={newsDesc} onChange={(e) => setNewsDesc(e.currentTarget.value)} /> */}
                   <div className="desc-input-container">
                    <ReactQuill className='desc-input' theme="snow" value={newsDesc} onChange={setNewsDesc}/>
                    </div> <br />
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

        </div>
    );
}

export default News;
