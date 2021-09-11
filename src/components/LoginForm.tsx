import React from "react";
import { Form, Input, Button } from "antd";
import { rules } from "../utils/rules";
import { useTypedSelector } from "../hooks/userTypedSelector";
import { useActions } from "../hooks/useActions";

const LoginForm: React.FC = () => {
  const { error, isLoading } = useTypedSelector((state) => state.authReducer);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { login } = useActions();

  const handleSubmit = () => {
    login(username, password);
  };

  return (
    <Form onFinish={handleSubmit}>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <Form.Item
        label="Username"
        name="username"
        rules={[rules.required("Please input your username")]}
      >
        <Input value={username} onChange={(e) => setUsername(e.target.value)} />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[rules.required("Please input your pass")]}
      >
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Enter
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
