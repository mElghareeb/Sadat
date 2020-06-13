import React, { useEffect } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { I18n } from "react-redux-i18n";
import { useDispatch } from 'react-redux'
import { authenticateUserAction } from './actions';
import { cookies } from '../../shared/helpers';
import { Redirect } from 'react-router-dom';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
const LoginForm = () => {

  useEffect(() => {
    console.log('useEffect')
    if (cookies.get('accessToken')) {
      let params = new URLSearchParams(window.location.search);
      let origin = params.get('origin');
       if(origin){
    window.location.href = origin

       }else{
        window.location.href = '/'

       } 
  }
  })

 const dispatch = useDispatch()
  const onFinish = (values) => {
    dispatch(authenticateUserAction(values.username,values.password));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label={I18n.t("login.userName")}
        name="username"
        rules={[{ required: true, message: "Please input your username or your email!" }]}
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

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>{I18n.t("login.rememberMe")}</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          {I18n.t("login.submit")}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
