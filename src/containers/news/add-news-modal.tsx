import React, { useEffect, useState } from 'react';
import { Card, Avatar, Spin, Row, Col } from 'antd';
// import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import './style.scss'
import { useDispatch, useSelector } from "react-redux";
import { getSchoolNewsAction } from "./actions";
import ReactQuill from 'react-quill';

const AddNewsModal = ()=>{

    const { Meta } = Card;
    const dispatch = useDispatch();
    const schoolNews: any = useSelector((state) => state.schoolNews);
    const [value, setValue] = useState('');
    useEffect(() => {
        // dispatch(getSchoolNewsAction());
    }, []);

    useEffect(() => {
        console.log('value-----', value)
    }, [value])

    return (

        <div className="page-container">
          <ReactQuill theme="snow" value={value} onChange={setValue}/>

        </div>
    );
}

export default AddNewsModal;
