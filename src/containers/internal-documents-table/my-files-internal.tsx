import React, { useEffect } from "react";
import { Row, Col, Table, Tabs, Spin, Empty } from "antd";
import "./style.scss";
import { Link, Route, Switch, useHistory } from "react-router-dom";
import { I18n } from "react-redux-i18n";
import { useDispatch, useSelector } from "react-redux";
import { getInternalDocumentsAction } from "./actions";

function MyFilesInternal() {
  const dispatch = useDispatch();
  const InternalDocument: any = useSelector((state) => state.InternalDocument);
  useEffect(() => {
    dispatch(getInternalDocumentsAction());
  }, []);

  const columns = [
    {
      title: I18n.t("table.subject"),
      dataIndex: "subject",
      key: "subject",
      render: (text) => (
        <Link to={"/internal-documents/" + text[1]}>{text[0]}</Link>
      ),
    },
    {
      title: I18n.t("table.from"),
      dataIndex: "from",
      key: "from",
    },
    {
      title: I18n.t("table.date"),
      dataIndex: "date",
      key: "date",
    },
    {
      title: I18n.t("table.priorty"),
      key: "priorty",
      dataIndex: "priorty",
      render: () => (
        <div className="icon-container active">
          <img src="/public/assets/images/heart.png" alt="" />
        </div>
      ),
    },
  ];

  const data = [];
  const handleInternalDocuments = () => {
    if (InternalDocument.data) {
      InternalDocument.data.map((item, indx) => {
        data.push({
          key: indx,
          subject: [item.subject, indx],
          from: item.uploaded_user.name,
          date: item.updated_at,
          priorty: item.priority,
        });
      });

      return <Table columns={columns} dataSource={data} />;
    } else {
      return <Empty />;
    }
  };
  return (
    <>
      {InternalDocument.isLoading ? (
        <Spin />
      ) : (
        handleInternalDocuments()
      )}
    </>
  );
}

export default MyFilesInternal;
