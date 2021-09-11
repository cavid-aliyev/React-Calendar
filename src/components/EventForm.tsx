import { Button, DatePicker, Form, Input, Row, Select } from "antd";
import React from "react";
import { rules } from "../utils/rules";

const EventForm: React.FC = () => {
  return (
    <Form>
      <Form.Item
        label="Action name"
        name="description"
        rules={[rules.required()]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Data action" name="date" rules={[rules.required()]}>
        <DatePicker />
      </Form.Item>
      <Form.Item>
        <Select onChange={() => console.log("pick user")}>
          <Select.Option value="javid">Javid</Select.Option>
          <Select.Option value="lucy">Lucy</Select.Option>
          <Select.Option value="jack">Jack</Select.Option>
        </Select>
      </Form.Item>
      <Row justify="end">
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Row>
    </Form>
  );
};

export default EventForm;
