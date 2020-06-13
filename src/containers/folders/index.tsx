import React, { useState, useEffect } from "react";
import { Row, Col, Table, Button, Modal, Input, Card, Spin } from "antd";
import "./style.scss";
import { Link, Route, Switch } from "react-router-dom";
import { I18n } from "react-redux-i18n";
import { useDispatch, useSelector } from "react-redux";
import { SearchOutlined } from "@ant-design/icons";
import { getFoldersAction, addFoldersAction } from "./actions";

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

const data = [
  {
    key: "1",
    subject: ["External Document 1", 1],
    from: "waleed",
    date: "12/3/2020",
    priorty: 1,
  },
  {
    key: "2",
    subject: ["External Document 2", 2],
    from: "Mahmoud",
    date: "12/3/2020",
    priorty: 3,
  },
  {
    key: "3",
    subject: ["External Document 3", 3],
    from: "Mahmoud",
    date: "12/3/2020",
    priorty: 2,
  },
  {
    key: "4",
    subject: ["External Document 4", 4],
    from: "Mahmoud",
    date: "12/3/2020",
    priorty: 2,
  },
];

function Folders() {
  const [visible, setVisible] = useState(false);
  const [folderName, setFolderName] = useState("");
  const dispatch = useDispatch();
  const MyFolders: any = useSelector((state) => state.foldersData);
  useEffect(() => {
    dispatch(getFoldersAction());
  }, []);

  const addFolder = (folderName) => {
    console.log(folderName, "Name");
    dispatch(addFoldersAction(folderName))
    setVisible(false);
  };

  return (
    <div className="page-container">
      {MyFolders.isLoading ? (
        <Spin />
      ) : (
        <Row gutter={[16, 16]}>
            <Col xs={24} sm={24} md={24} lg={24}>
              <div className="header-row">
                <h2>{I18n.t("dashboard.folders")}</h2>

                <Button
                  type="primary"
                  icon={<SearchOutlined />}
                  onClick={() => setVisible(true)}
                >
                  Add Folder
                </Button>
              </div>
              {/* <Table columns={columns} dataSource={data} /> */}
            </Col>
            {MyFolders.data &&
              MyFolders.data.map((folder, indx) => {
                return (
                  <Col span={6} key={indx}>
                    <Card bordered={false}>{folder.title}</Card>
                  </Col>
                );
              })}
        </Row>
      )}
      <Modal
        title="Add new folder"
        visible={visible}
        onOk={() => addFolder(folderName)}
        onCancel={() => setVisible(false)}
      >
        <p>Folder Name</p>
        <Input
          placeholder="input with clear icon"
          allowClear
          onChange={(e) => setFolderName(e.target.value)}
        />
      </Modal>
    </div>
  );
}

export default Folders;
