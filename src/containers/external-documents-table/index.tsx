import React from "react";
import { Row, Col, Table, Tabs } from "antd";
import "./style.scss";
import { Link, Route, Switch } from "react-router-dom";
import ExternalDocument from "../external-document";
import { I18n } from "react-redux-i18n";
import MyFilesExternal from "./my-filex-external";

function ExternalDocumentsTable() {
  const { TabPane } = Tabs;

  return (
    <div className="page-container">
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={24} lg={24}>
          <h2>{I18n.t("dashboard.externalDocuments")}</h2>

          <Tabs defaultActiveKey="1">
            <TabPane tab="My Documents" key="1">
              <MyFilesExternal />
            </TabPane>
            <TabPane tab="Shared with me" key="2">
              <MyFilesExternal />
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </div>
  );
}

export default ExternalDocumentsTable;
