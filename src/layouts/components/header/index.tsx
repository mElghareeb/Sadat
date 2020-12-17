import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { I18n } from "react-redux-i18n";
import { Badge, Avatar, Popover } from "antd";
import { MessageOutlined, BellOutlined } from "@ant-design/icons";
import LangSwitcher from "../lang-switcher";
import { cookies } from "../../../shared/helpers";
// import { getProfileAction } from "./action";
import { useHistory } from "react-router-dom";
import Search from 'antd/lib/input/Search';

function Header() {
  let history = useHistory();
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.profile);
  useEffect(() => {
    if (!cookies.get("accessToken")) {
      window.location.href = "/login?origin=" + window.location.pathname;
    } else {
      // dispatch(getProfileAction());
      console.log('will get profile data')
    }
  }, []);

  const onSearch = value => console.log(value);

  const logout = () => {
    cookies.remove("accessToken", { path: "/" });
    window.location.href = "/login";

  };

  const notifications = (
    <div>
      <p>notification</p>
      <p>notification</p>
    </div>
  );
  const messages = (
    <div>
      <p>message</p>
      <p>message</p>
    </div>
  );
  const profile = (
    <div>
      {/* <p>profile</p> */}
      <p>
        <a onClick={logout}>الخروج</a>
      </p>
    </div>
  );
  return (
    <header className="header-container">
      <div className="right-side">
        <div className="logo-container">
          <img src="/public/assets/images/logo2.jpeg" alt="" className="logo" />
        </div>
      </div>
      <div className="controls-container">
        {/* <div className="search-bar-container">
          <Search placeholder="search" onSearch={onSearch} enterButton />
        </div> */}
        {/* <Popover
          className="control-btn"
          placement="bottom"
          content={messages}
          trigger="click"
        >
          <Avatar
            style={{
              backgroundColor: "white",
              color: "#222",
              verticalAlign: "middle",
            }}
            size={40}
            icon={<MessageOutlined />}
          />
        </Popover> */}

        {/* <Popover
          className="control-btn"
          placement="bottom"
          content={notifications}
          trigger="click"
        >
          <Badge dot={true}>
            <Avatar
              style={{
                backgroundColor: "white",
                color: "#222",
                verticalAlign: "middle",
              }}
              size={40}
              icon={<BellOutlined />}
            />
            <a href="#" className="head-example" />
          </Badge>
        </Popover> */}

        <Popover
          className="control-btn"
          placement="bottom"
          content={profile}
          trigger="click"
        >
          <Avatar
            style={{ backgroundColor: "orange", verticalAlign: "middle" }}
            size={25}
          >
            {/* {profileData.name && profileData.name.charAt(0)} */}
            AB
          </Avatar>
        </Popover>

        {/* <div className="lang-switcher-container">
          <LangSwitcher />
        </div> */}
      </div>
    </header>
  );
}

export default Header;
