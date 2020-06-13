import React, { useEffect } from 'react';
import { Row, Col, Table, Spin, Empty } from 'antd';
import './style.scss'
import { Link, Route, Switch, useHistory } from 'react-router-dom';
import ExternalDocument from '../external-document';
import { I18n } from 'react-redux-i18n';
import { useDispatch, useSelector } from "react-redux";
import { getExternalDocumentsAction } from "./actions";



function MyFilesExternal() {
    const dispatch = useDispatch();
    const ExternalDocument: any = useSelector((state) => state.ExternalDocument);
    useEffect(() => {
      dispatch(getExternalDocumentsAction());
    }, []);
  

    
const columns = [
    {
        title: I18n.t("table.subject"),
        dataIndex: 'subject',
        key: 'subject',
        render: (text) => <Link to={'/external-documents/' + text[1]}>{text[0]}</Link>,
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

const data = [];
  const handleExternalDocuments = () => {
      
    if (ExternalDocument.data) {
      ExternalDocument.data.map((item, indx) => {
        data.push({
          key: indx,
          subject: [item.subject, indx],
          from: item.uploaded_user.name,
          date: item.updated_at,
          priorty: item.priority,
        });
      });
console.log('dataaaa', ExternalDocument)
      return <Table columns={columns} dataSource={data} />;
    } else {
      return <Empty />;
    }
  };


    return (
        <>
        {ExternalDocument.isLoading ? (
          <Spin />
        ) : (
          handleExternalDocuments()
        )}
      </>
    );
}

export default MyFilesExternal;
