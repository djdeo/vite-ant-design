import React from "react";
import { Form, Input, Button } from "antd";
import { useHistory } from "react-router-dom";

export interface AntFormProps {}

const AntForm: React.SFC<AntFormProps> = () => {
  const history = useHistory();

  const onFinish = (data: any) => {
    console.log(data);
    console.log('history==>',history);
    
    history.push("/about");
  };
  const onFinishFailed = (error: any) => {
    console.log(error);
  };
  return (
    <fieldset>
      <legend>Login Form</legend>
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
    </fieldset>
  );
};

export default AntForm;
