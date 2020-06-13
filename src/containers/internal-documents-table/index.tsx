import React from "react";
import { Row, Col, Table, Tabs } from "antd";
import "./style.scss";
import { Link, Route, Switch } from "react-router-dom";
import IternalDocument from "../internal-document";
import { I18n } from "react-redux-i18n";
import MyFilesInternal from "./my-files-internal";

function IternalDocumentsTable() {
  const { TabPane } = Tabs;
  return (
    <div className="page-container">
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={24} lg={24}>
          <h2>{I18n.t("dashboard.internalDocuments")}</h2>

          <Tabs defaultActiveKey="1">
            <TabPane tab="My Documents" key="1">
              <MyFilesInternal />
            </TabPane>
            <TabPane tab="Shared with me" key="2">
              <MyFilesInternal />
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </div>
  );
}

export default IternalDocumentsTable;
