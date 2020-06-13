import React from 'react';
import { message, Row, Col, Form, DatePicker, Button, Input, Select, Upload } from 'antd';
import { InboxOutlined, RightCircleOutlined } from '@ant-design/icons';
import './style.scss';
import { API_URLS } from '../../shared/servicesURLs';

const { Dragger } = Upload;
const OPTIONS = ['Apples', 'Nails', 'Bananas', 'Helicopters'];
// const props = {
//     action: '//jsonplaceholder.typicode.com/posts/',
//     listType: 'picture',
//     multiple:true,
//     previewFile(file) {
//       console.log('Your upload file:', file);
//       // Your process logic. Here we just mock to the same file
//       return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
//         method: 'POST',
//         body: file,
//       })
//         .then(res => res.json())
//         .then(({ thumbnail }) => thumbnail);
//     },
//     onChange(info) {
//         const { status } = info.file;
//         if (status !== 'uploading') {
//           console.log(info.file, info.fileList);
//         }
//         if (status === 'done') {
//           console.log(`${info.file.name} file uploaded successfully.`);
//         } else if (status === 'error') {
//             console.log(`${info.file.name} file upload failed.`);
//         }
//       },
//   };

const props = {
    name: 'file',
    multiple: true,
    action: API_URLS.UPLOAD_FILE,
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

class ExternalForm extends React.Component {
    state = {
        priorityNumber: 0,
        selectedItems: [],
    }
    handlePriorty = (priorityNumber) => {
        this.setState({ priorityNumber })
    }
    handleChange = selectedItems => {
        this.setState({ selectedItems });
    };

    render() {
        function onChange(date, dateString) {
            console.log(date, dateString);
        }

        const { selectedItems } = this.state;
        const filteredOptions = OPTIONS.filter(o => !selectedItems.includes(o));

        return (
            <Row gutter={[16, 16]} className='internal-form-container'>
                <Col xs={24} sm={24} md={10} lg={10}>
                    <div className="form-container">
                        <h1 className="form-title">New External Document</h1>
                        <Form className='internal-form' name="time_related_controls" onFinish={() => { }}>

                            <Form.Item name="date-picker" rules={[{ required: true, message: 'Please select date!' }]}>
                                <DatePicker onChange={onChange} />
                            </Form.Item>

                            <Form.Item
                                name="Subject"
                                rules={[{ required: true, message: 'Please input Subject!' }]}
                            >
                                <Input placeholder="Subject" />
                            </Form.Item>

                            <Form.Item
                                name="from"

                                rules={[{ required: true, message: 'Please input From!' }]}
                            >
                                <Input placeholder="From" />
                            </Form.Item>

                            <div className="perioty-input-container">
                                <div className="perioty-label">priority</div>
                                <div className="priority-icons">
                                    <div className={this.state.priorityNumber === 1 ? "icon-container active" : "icon-container"} onClick={() => this.handlePriorty(1)}>
                                        <img src="./public/assets/images/heart.png" alt="" />
                                    </div>
                                    <div className={this.state.priorityNumber === 2 ? "icon-container active" : "icon-container"} onClick={() => this.handlePriorty(2)}>
                                        <img src="./public/assets/images/heart.png" alt="" />
                                    </div>
                                    <div className={this.state.priorityNumber === 3 ? "icon-container active" : "icon-container"} onClick={() => this.handlePriorty(3)}>
                                        <img src="./public/assets/images/heart.png" alt="" />
                                    </div>
                                </div>
                            </div>
                            <Form.Item
                                name="assignedTo"
                                label="Assigned to:"
                                rules={[{ required: true, message: 'Please input Assigned to!' }]}
                                className='v-form-item'
                            >
                                <Select
                                    mode="multiple"
                                    placeholder="please mention user here"
                                    value={selectedItems}
                                    onChange={this.handleChange}
                                    style={{ width: '100%' }}
                                >
                                    {filteredOptions.map(item => (
                                        <Select.Option key={item} value={item}>
                                            {item}
                                        </Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>

                            <Form.Item
                                wrapperCol={{
                                    xs: { span: 24, offset: 0 },
                                    sm: { span: 16, offset: 8 },
                                }}
                            >
                                {/* <Button type="primary" htmlType="submit">
                                    Submit
                                    </Button> */}
                            </Form.Item>
                        </Form>
                    </div>
                </Col>
                <Col xs={24} sm={24} md={14} lg={14}>
                    <div className="document-uploader-container">
                        <h1 className='document-uploader-title'>Request Documents</h1>
                        <Dragger {...props}>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                            <p className="ant-upload-hint">
                                Please drag your files here
                            </p>
                        </Dragger>
                    </div>
                    <hr />
                    <div className="document-uploader-container">
                        <h1 className='document-uploader-title'>Request Attatchments</h1>
                        <Dragger {...props}>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                            <p className="ant-upload-hint">
                                Please drag your files here
                            </p>
                        </Dragger>
                    </div>

                    <div className="form-controller">
                    <Button className='update-btn' type="primary" icon={<RightCircleOutlined />}>
                                    Save
    </Button>
                    </div>
                </Col>
            </Row>
        );
    }
}
export default ExternalForm;
