import React from "react";
import { Form, Input, Button } from "antd";
import { rules } from "../utils/rules";

const LoginForm: React.FC = () => {
  return (
    <Form>
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
