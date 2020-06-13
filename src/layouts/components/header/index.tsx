import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { I18n } from "react-redux-i18n";
import { Badge, Avatar, Popover } from "antd";
import { SettingOutlined, BellOutlined } from "@ant-design/icons";
import LangSwitcher from "../lang-switcher";
import { cookies } from "../../../shared/helpers";
import { getProfileAction } from "./action";
import { useHistory } from "react-router-dom";

function Header() {
  let history = useHistory();
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.profile);
  useEffect(() => {
    if (!cookies.get("accessToken")) {
      window.location.href = "/login?origin=" + window.location.pathname;
    } else {
      dispatch(getProfileAction());
    }
  }, []);

  const logout = () => {
    cookies.remove("accessToken", {
      path: "/",
      domain:
        window.location.hostname.indexOf("elmenus") >= 0 ? ".elmenus.com" : "",
    });
    cookies.remove("refreshToken", {
      path: "/",
      domain:
        window.location.hostname.indexOf("elmenus") >= 0 ? ".elmenus.com" : "",
    });
    history.push("/login");
  };

  const notifications = (
    <div>
      <p>notification</p>
      <p>notification</p>
    </div>
  );
  const settings = (
    <div>
      <p>setting</p>
      <p>setting</p>
    </div>
  );
  const profile = (
    <div>
      <p>profile</p>
      <p>
        <a onClick={logout}>Logout</a>
      </p>
    </div>
  );
  return (
    <header className="header-container">
      <div className="right-side">
        <div className="logo-container">
          <img src="/public/assets/images/logo.png" alt="" className="logo" />
        </div>

        <div className="links-container">
          <Link className="header-link" to="/dashboard">
            {I18n.t("dashboard.dashboard")}
          </Link>

          <Link className="header-link" to="/reports">
            {I18n.t("reports")}
          </Link>
        </div>
      </div>
      <div className="controls-container">
        <Popover
          className="control-btn"
          placement="bottom"
          content={settings}
          trigger="click"
        >
          <Avatar
            style={{
              backgroundColor: "white",
              color: "#222",
              verticalAlign: "middle",
            }}
            size={50}
            icon={<SettingOutlined />}
          />
        </Popover>

        <Popover
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
              size={50}
              icon={<BellOutlined />}
            />
            <a href="#" className="head-example" />
          </Badge>
        </Popover>

        <Popover
          className="control-btn"
          placement="bottom"
          content={profile}
          trigger="click"
        >
          <Avatar
            style={{ backgroundColor: "orange", verticalAlign: "middle" }}
            size={35}
          >
            {profileData.name && profileData.name.charAt(0)}
          </Avatar>
        </Popover>

        <div className="lang-switcher-container">
          <LangSwitcher />
        </div>
      </div>
    </header>
  );
}

export default Header;
