import React from "react";
import { Form, Input, Button } from "antd";
import { rules } from "../utils/rules";
import { useDispatch } from "react-redux";
import { AuthActionsCreators } from "../store/reducers/auth/action-creators";

const LoginForm: React.FC = () => {

  const dispatch = useDispatch()

  const handleSubmit = () => {
      dispatch(AuthActionsCreators.login("", ""))
  }


  return (
    <Form onFinish={handleSubmit}>
      <Form.Item
        label="Username"
        name="username"
        rules={[rules.required("Please input your username")]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[rules.required("Please input your pass")]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Enter
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
