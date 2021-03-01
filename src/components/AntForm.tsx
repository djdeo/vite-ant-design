import React from "react";
import { Form, Input, Button } from "antd";

export interface AntFormProps {}

const AntForm: React.SFC<AntFormProps> = () => {
  const onFinish = (data: any) => {
    console.log(data);
  };
  const onFinishFailed = (error: any) => {
    console.log(error);
  };
  return (
    <Form onFinishFailed={onFinishFailed} onFinish={onFinish}>
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AntForm;
