import React, { useEffect, useState } from 'react';
import { Card, Avatar, Spin, Row, Col, Button, Modal, Upload, Input, Pagination } from 'antd';
import { EditOutlined, DeleteFilled, DownloadOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import './style.scss'
import { useDispatch, useSelector } from "react-redux";
import { addJob, deleteJobAction, downloadJobAction, getJobsAction } from "./actions";
import { Link } from 'react-router-dom';
import { I18n } from 'react-redux-i18n';
import renderHTML from 'react-render-html';



function Jobs() {
    const { Meta } = Card;
    const dispatch = useDispatch();
    const [visible, setVisible] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const jobs: any = useSelector((state) => state.jobs);
    const [jobUrl, setJobUrl] = useState('');
    const [imageTitle, setImageTitle] = useState('')



    useEffect(() => {
        dispatch(getJobsAction(currentPage));
    }, []);

    useEffect(() => {
        console.log('jobs-----', jobs.data, Math.ceil(jobs.count / 10))
    }, [jobs])


    function confirm(jobId) {
        console.log('confi')
        Modal.confirm({
            title: 'حذف الرسالة',
            icon: <ExclamationCircleOutlined />,
            content: 'هل تريد فعلا حذف الرسالة؟؟',
            okText: 'حذف الرسالة',
            cancelText: 'رجوع',
            onOk() {
                dispatch(deleteJobAction(jobId));
            }
        });
    }

    function downloadCV(jobId){
        dispatch(downloadJobAction(jobId));
    }


    function onChange (page){
        console.log('console.log(page);', page);
        setCurrentPage(page);
        dispatch(getJobsAction(page));
    }
    return (

        <div className="page-container">
            <div className="page-header">
                <div className="page-title">طلبات الوظائف</div>
                {/* <Button className="add-new-btn" onClick={() => setVisible(true)}>اضف صورة</Button> */}
            </div>
            {jobs.isLoading ? (
                <Spin />
            ) : (
                    <Row gutter={[16, 16]} className='news-container'>
                        {jobs.data && jobs.data.map((jobsItem, i) => {
                            return (
                                <Col className="gutter-row" key={i} xs={24} sm={12} md={12} lg={12} xl={12}>
                                    <Card
                                        style={{ width: '100%' }}
                                        key={jobsItem.id}
                                        actions={[
                                            <div onClick={() => {
                                                confirm(jobsItem.id)
                                                // dispatch(deleteJobAction(jobsItem.jobId));
                                            }}>
                                                <DeleteFilled key="delete" color='#FF0000' onClick={() => {
                                                    confirm(jobsItem.id)
                                                    // 
                                                }} /> جذف الرسالة</div>,
                                            // <EditOutlined key="edit" />,
                                            // <EllipsisOutlined key="ellipsis" />,
                                        ]}
                                    >
                                        
                                      <p><span style={{color:'#000', fontWeight:'bold'}}> مقدم من:</span> {jobsItem.source} </p>
                                      <p><span style={{color:'#000', fontWeight:'bold'}}>  هل تحمل اقامة قابلة للتحويل:</span> {jobsItem.convertibleEstablishment == 1? 'نعم' : 'لا'}</p>
                                      <p><span style={{color:'#000', fontWeight:'bold'}}> الاسم رباعي:</span> {jobsItem.applicantName}</p>
                                      <p><span style={{color:'#000', fontWeight:'bold'}}> رقم الهاتف:</span> {jobsItem.mobile}</p>
                                      <p><span style={{color:'#000', fontWeight:'bold'}}> النوع:</span> {jobsItem.sex == 1? 'ذكر' : 'انثى'}</p>
                                      <p><span style={{color:'#000', fontWeight:'bold'}}> الحالة الاجتماعية:</span> {jobsItem.maritalStatus}</p>
                                      <p><span style={{color:'#000', fontWeight:'bold'}}> الديانة:</span> {jobsItem.religion}</p>
                                      <p><span style={{color:'#000', fontWeight:'bold'}}> الوظيفة:</span> {jobsItem.position.name}</p>
                                      <p><span style={{color:'#000', fontWeight:'bold'}}> عدد سنين الخبرة:</span> {jobsItem.experienceYears}</p>
                                      <p><span style={{color:'#000', fontWeight:'bold'}}> الجنسية:</span> {jobsItem.nationality}</p>
                                      <p><span style={{color:'#000', fontWeight:'bold'}}> رقم الهوية:</span> {jobsItem.identity}</p>
                                      <Button type="primary" shape="round" icon={<DownloadOutlined />} size='large'  onClick={()=>downloadCV(jobsItem.id)}>تحميل</Button>
                                         </Card>
                                </Col>
                            )
                        })}
                    </Row>
                )}

{(jobs.count> 10) && <Pagination current={currentPage} onChange={(page)=>onChange(page)} total={jobs.count} />}
</div>
    );

}

export default Jobs;
