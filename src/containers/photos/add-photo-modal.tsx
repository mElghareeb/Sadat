import React, { useEffect, useState } from 'react';
import { Card, Avatar, Spin, Row, Col, Modal } from 'antd';
// import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import './style.scss'
import { useDispatch, useSelector } from "react-redux";
import { addPhoto } from "./actions";
import ReactQuill from 'react-quill';
import { OmitProps } from 'antd/lib/transfer/ListBody';

const AddPhotoModal = ()=>{
    const [image, setImage] = useState({ preview: "", raw: "" });
    const dispatch = useDispatch()
    const handleChange = e => {
      if (e.target.files.length) {
        setImage({
          preview: URL.createObjectURL(e.target.files[0]),
          raw: e.target.files[0]
        });
      }
    };
    
  const handleUpload = async e => {
    e.preventDefault();
    
    console.log('uplooood')
    dispatch(addPhoto('mahmoud', image))
  };

  return (
    <Modal
    title="Basic Modal"
    visible={props.visible}
    onOk={handleOk}
    onCancel={handleCancel}
>
    <p>Upload Photos...</p>
    <div>
      <label htmlFor="upload-button">
        {image.preview ? (
          <img src={image.preview} alt="dummy" width="300" height="300" />
        ) : (
          <>
            <span className="fa-stack fa-2x mt-3 mb-2">
              <i className="fas fa-circle fa-stack-2x" />
              <i className="fas fa-store fa-stack-1x fa-inverse" />
            </span>
            <h5 className="text-center">Upload your photo</h5>
          </>
        )}
      </label>
      <input
        type="file"
        id="upload-button"
        style={{ display: "none" }}
        onChange={handleChange}
      />
      <br />
      <button onClick={handleUpload}>Upload</button>
    </div>
    </Modal>
  );
}

export default AddPhotoModal;
