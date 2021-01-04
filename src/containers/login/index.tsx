import React, { useEffect } from "react";
import { Form, Input, Button, Checkbox, message } from "antd";
import { I18n } from "react-redux-i18n";
import { useDispatch } from 'react-redux'
import { authenticateUserAction } from './actions';
import { cookies } from '../../shared/helpers';
import { Redirect } from 'react-router-dom';

const layout = {
  labelCol: { span: 24 },
  wrapperCol: { span: 24 },
};
const tailLayout = {
  wrapperCol: { offset: 0, span: 24 },
};
const LoginForm = () => {

  useEffect(() => {
    console.log('useEffect')
    if (localStorage.getItem(`accessToken/${window.location.pathname.split('/')[1]}`)) {
      let params = new URLSearchParams(window.location.search);
      let origin = params.get('origin');
      if (origin) {
        window.location.href = origin

      } else {
        window.location.href = '/'

      }
    }
  })

  const dispatch = useDispatch()
  const onFinish = (values) => {
    dispatch(authenticateUserAction(values.username, values.password));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      {...layout}
      layout="vertical"
      name="basic"
      initialValues={{ remember: true, layout: 'vertical' }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label={I18n.t("login.userName")}
        name="username"
        rules={[{ required: true, message: "Please input your username or your email!" },
          // { type: 'email' , message: "not a valid email!"}
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={I18n.t("login.password")}
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      {/* <div className="forget-password-container">
        <a href="/forget">{I18n.t("login.forgetPassword")}</a>
      </div> */}

      <Form.Item {...tailLayout}>
        <Button className='login-btn' type="primary" htmlType="submit">
          {I18n.t("login.submit")}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
