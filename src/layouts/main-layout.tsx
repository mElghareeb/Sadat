import React from "react";
import { Layout, Button } from "antd";
import Header from "./components/header";
import SideMenu from "./components/side-menu";
import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import Dashboard from "../containers/dashboard";
import { Switch, Route, Redirect, Link } from "react-router-dom";
import InternalForm from "../containers/internal-document-form";
import IternalDocumentsTable from "../containers/internal-documents-table";
import IternalDocument from "../containers/internal-document";
import ExternalDocument from "../containers/external-document";
import ExternalForm from "../containers/external-document-form";
import ExternalDocumentsTable from "../containers/external-documents-table";
import { cookies } from "../shared/helpers";
import Folders from '../containers/folders';

const { Content, Sider } = Layout;

class MainLayout extends React.Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };


  render() {
    return (
      <Layout>
        <Header />
        <Layout>
          <Sider
            width={300}
            className="site-layout-background"
            collapsed={this.state.collapsed}
          >
            <Button
              className="side-menu-controller-btn"
              style={{ fontWeight: "bold" }}
              onClick={this.toggleCollapsed}
            >
              {React.createElement(
                this.state.collapsed ? RightOutlined : LeftOutlined
              )}
            </Button>
            <SideMenu />
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              <Switch>
                <Route exact path={"/"} component={Dashboard} />
                <Route path={"/dashboard"} component={Dashboard} />
                <Route
                  path="/new-internal-documents"
                  component={InternalForm}
                />
                <Route
                  path="/new-external-documents"
                  component={ExternalForm}
                />
                <Route
                  exact
                  path="/internal-documents"
                  component={IternalDocumentsTable}
                />
                <Route
                  exact
                  path="/external-documents"
                  component={ExternalDocumentsTable}
                />
                <Route
                  exact
                  path="/internal-documents/:id"
                  component={IternalDocument}
                />
                <Route
                  exact
                  path="/external-documents/:id"
                  component={ExternalDocument}
                />
                <Route
                  exact
                  path="/folders"
                  component={Folders}
                />
                
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default MainLayout;
