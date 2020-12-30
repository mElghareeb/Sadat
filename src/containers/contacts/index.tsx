import React, { useEffect, useState } from 'react';
import { Card, Avatar, Spin, Row, Col, Button, Modal, Upload, Input, Pagination } from 'antd';
import { EditOutlined, DeleteFilled, CloudUploadOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import './style.scss'
import { useDispatch, useSelector } from "react-redux";
import {  deleteContactAction, getContactsAction } from "./actions";
import { Link } from 'react-router-dom';
import { I18n } from 'react-redux-i18n';
import renderHTML from 'react-render-html';



const Contacts=()=> {
    const { Meta } = Card;
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const contacts: any = useSelector((state) => state.contacts);
    const [contactUrl, setContactUrl] = useState('');
    const [imageTitle, setImageTitle] = useState('')


    // const handleUpload = async () => {
    //     //   e.preventDefault();

    //     console.log('uplooood')
    //     dispatch(addContact(imageTitle, contactUrl))
    // };

    useEffect(() => {
        dispatch(getContactsAction(currentPage));
    }, []);

    useEffect(() => {
        console.log('contacts-----', contacts.data)
    }, [contacts])

    // const handleOk = e => {
    //     console.log(e);
    //     if (imageTitle.length) {
    //         handleUpload();
    //         setVisible(false)
    //     }
    //     else {
    //         alert('الرجاء كتابة عنوان للصورة')
    //     }
    // };

    // const handleCancel = e => {
    //     console.log(e);
    //     setVisible(false)

    // };

    function confirm(contactId) {
        console.log('confi')
        Modal.confirm({
            title: 'حذف الرسالة',
            icon: <ExclamationCircleOutlined />,
            content: 'هل تريد فعلا حذف الرسالة؟؟',
            okText: 'حذف الرسالة',
            cancelText: 'رجوع',
            onOk() {
                dispatch(deleteContactAction(contactId));
            }
        });
    }

    
    function onChange (page){
        console.log('console.log(page);', page);
        setCurrentPage(page);
        dispatch(getContactsAction(page));
    }

    return (

        <div className="page-container">
            <div className="page-header">
                <div className="page-title">تواصل معنا</div>
                {/* <Button className="add-new-btn" onClick={() => setVisible(true)}>اضف صورة</Button> */}
            </div>
            {contacts.isLoading ? (
                <Spin />
            ) : (
                    <Row gutter={[16, 16]} className='news-container'>
                        {contacts.data && contacts.data.map((contactsItem, i) => {
                            return (
                                <Col className="gutter-row" key={i} xs={24} sm={12} md={12} lg={12} xl={12}>
                                    <Card
                                        style={{ width: '100%' }}
                                        key={contactsItem.id}
                                        actions={[
                                            <div onClick={() => {
                                                confirm(contactsItem.id)
                                                // dispatch(deleteContactAction(contactsItem.contactId));
                                            }}>
                                                <DeleteFilled key="delete" color='#FF0000' onClick={() => {
                                                    confirm(contactsItem.id)
                                                    // 
                                                }} /> جذف الرسالة</div>,
                                            // <EditOutlined key="edit" />,
                                            // <EllipsisOutlined key="ellipsis" />,
                                        ]}
                                    >
                                        
                                      <p><span style={{color:'#000', fontWeight:'bold'}}> الاسم:</span> {contactsItem.name} </p>
                                      <p><span style={{color:'#000', fontWeight:'bold'}}>  الايميل:</span> {contactsItem.email}</p>
                                      <p><span style={{color:'#000', fontWeight:'bold'}}> رقم الجوال:</span> {contactsItem.phone}</p>
                                      <p><span style={{color:'#000', fontWeight:'bold'}}> الرسلة:</span> {contactsItem.message}</p>
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                )}


            {/* <Modal
                title="ارفق الرسالة بالعنوان"
                visible={visible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <div>
                    <Input placeholder="اكتب عنوان الرسالة" value={imageTitle} onChange={(e) => setImageTitle(e.currentTarget.value)} />
                    <br />
                    <Input placeholder="اكتب رابط الرسالة" value={contactUrl} onChange={(e) => setContactUrl(e.currentTarget.value)} />
                    
                </div>
            </Modal> */}
            
{(contacts.count> 10) && <Pagination current={currentPage} onChange={(page)=>onChange(page)} total={contacts.count} />}

        </div>
    );

}

export default Contacts;
