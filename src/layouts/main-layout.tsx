import React, { useEffect, useState } from "react";
import { Layout, Button, Breadcrumb } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, useHistory } from "react-router-dom";
import { cookies } from '../shared/helpers';
import { getProfileAction } from './components/header/action';
import Header from './components/header';
import News from '../containers/news';
import SideMenu from './components/side-menu';
import Photos from '../containers/photos';
import Videos from '../containers/videos';
import Contacts from "../containers/contacts";
import Jobs from "../containers/jobs";
import Internaljobs from "../containers/internal-jobs";

const MainLayout = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  // const profileData = useSelector((state) => state.profile);
  const [collapsed, setCollapsed] = useState(true)
  const { Content, Sider } = Layout;
  useEffect(() => {
    if (!cookies.get("accessToken")) {
      window.location.href = "/login?origin=" + window.location.pathname;
    } else {
      // dispatch(getProfileAction());
      console.log('get Profile')
    }
  }, []);


  return (
    <Layout>
      <Header />
      <Layout>
        <Sider
          width={100}
          className="site-layout-background"
          collapsed={collapsed}
        >
          {/* <Button
              className="side-menu-controller-btn"
              style={{ fontWeight: "bold" }}
              onClick={this.toggleCollapsed}
            >
              {React.createElement(
                this.state.collapsed ? RightOutlined : LeftOutlined
              )}
            </Button> */}
          <SideMenu />
        </Sider>
        <Layout style={{}}>
          {/* <div className="breadcrumb-container">
            <Breadcrumb>
              <Breadcrumb.Item>
              <a href="/news">الأخبار</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <a href="">Courses</a>
              </Breadcrumb.Item>
              <Breadcrumb.Item>Course Name</Breadcrumb.Item>
            </Breadcrumb>
          </div> */}
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >

            <Switch>
              <Route exact path={"/"} component={News} />
              <Route path={"/news"} component={News} />
              <Route path={"/photos"} component={Photos} />
              <Route path={"/videos"} component={Videos} />
              <Route path={"/contacts"} component={Contacts} />
              <Route path={"/jobs"} component={Jobs} />
              <Route path={"/internal-jobs"} component={Internaljobs} />
             
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default MainLayout;
