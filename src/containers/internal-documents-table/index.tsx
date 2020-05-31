import React from 'react';
import { Row, Col, Table } from 'antd';
import './style.scss'
import { Link, Route, Switch } from 'react-router-dom';
import IternalDocument from '../internal-document';
import { I18n } from 'react-redux-i18n';



function IternalDocumentsTable() {

const columns = [
    
    {
        title: I18n.t("table.subject"),
        dataIndex: 'subject',
        key: 'subject',
        render: (text) => <Link to={'/internal-documents/' + text[1]}>{text[0]}</Link>,
    },
    {
        title: I18n.t("table.from"),
        dataIndex: 'from',
        key: 'from',
    },
    {
        title: I18n.t("table.date"),
        dataIndex: 'date',
        key: 'date',
    },
    {
        title: I18n.t("table.priorty"),
        key: 'priorty',
        dataIndex: 'priorty',
        render: () => <div className="icon-container active"><img src="/public/assets/images/heart.png" alt="" /></div>

    }
];

const data = [
    {
        key: '1',
        subject: ['Internal Document 1', 1],
        from: 'waleed',
        date: '12/3/2020',
        priorty: 1,
    },
    {
        key: '2',
        subject: ['Internal Document 2', 2],
        from: 'Mahmoud',
        date: '12/3/2020',
        priorty: 3,
    },
    {
        key: '3',
        subject: ['Internal Document 3', 3],
        from: 'Mahmoud',
        date: '12/3/2020',
        priorty: 2,
    },
    {
        key: '4',
        subject: ['Internal Document 4', 4],
        from: 'Mahmoud',
        date: '12/3/2020',
        priorty: 2,
    },
];

    return (
        <div className="page-container">
            <Row gutter={[16, 16]}>
                <Col xs={24} sm={24} md={24} lg={24}>
                    <h2>{I18n.t("dashboard.internalDocuments")}</h2>
                    <Table columns={columns} dataSource={data} />
                </Col>
            </Row>

        </div>
    );
}

export default IternalDocumentsTable;
