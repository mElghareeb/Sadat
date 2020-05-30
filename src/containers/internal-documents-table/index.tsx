import React from 'react';
import { Row, Col, Table } from 'antd';
import './style.scss'
import { Link, Route, Switch } from 'react-router-dom';
import IternalDocument from '../internal-document';

const columns = [
    {
        title: 'From',
        dataIndex: 'from',
        key: 'from',
        render: (text) => <Link to={'/internal-documents/' + text[1]}>{text[0]}</Link>,
    },
    {
        title: 'Subject',
        dataIndex: 'subject',
        key: 'subject',
    },
    {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: 'Priorty',
        key: 'priorty',
        dataIndex: 'priorty',
        render: () => <div className="icon-container active"><img src="/public/assets/images/heart.png" alt="" /></div>

    }
];

const data = [
    {
        key: '1',
        from: ['Internal Document 1', 1],
        subject: 'waleed',
        date: '12/3/2020',
        priorty: 1,
    },
    {
        key: '2',
        from: ['Internal Document 2', 2],
        subject: 'Mahmoud',
        date: '12/3/2020',
        priorty: 3,
    },
    {
        key: '3',
        from: ['Internal Document 3', 3],
        subject: 'Mahmoud',
        date: '12/3/2020',
        priorty: 2,
    },
    {
        key: '4',
        from: ['Internal Document 4', 4],
        subject: 'Mahmoud',
        date: '12/3/2020',
        priorty: 2,
    },
];


function IternalDocumentsTable() {
    return (
        <div className="page-container">
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={24} md={24} lg={24}>
                    <Table columns={columns} dataSource={data} />
                </Col>
            </Row>
           
        </div>
    );
}

export default IternalDocumentsTable;
