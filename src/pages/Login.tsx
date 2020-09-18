import React, { createRef, useContext, useState, useEffect } from "react";
import {
  Input,
  Row,
  Col,
  Typography,
  Button,
  message,
  Space,
  Form,
  Checkbox,
} from "antd";
import { useHistory, useLocation } from "react-router-dom";
import { LayoutWrapper } from "../components/LayoutWrapper";
import { Login_API } from "../services/Services";
import { GLOBAL_DATA } from "../redux/actionTypes";
import { useDispatch } from "react-redux";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: GLOBAL_DATA,
      payload: { header: { rootPage: true, logout: false, heading: "Login" } },
    });
  }, []);

  const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 19 },
  };
  const tailLayout = {
    wrapperCol: { offset: 12, span: 16 },
  };
  const onFinish = (values: any) => {
    dispatch({ type: GLOBAL_DATA, payload: { loaderVisible: true } });
    Login_API(values, onSchoolDataSuccess);
  };
  const onSchoolDataSuccess = (responseData: any) => {
    dispatch({
      type: GLOBAL_DATA,
      payload: {
        currentPage: "",
        currentRowId: "",
        token: responseData.data.accessToken,
        loaderVisible: false,
      },
    });
    history.push("/userlist");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <LayoutWrapper title="Eventus Administration Panel" rootPage={true}>
        <Row
          style={{ height: "calc(100vh - 60px)" }}
          justify="center"
          align="middle"
        >
          <Col xs={20} sm={18} md={12} lg={8}>
            <Row className="inner-wrapper" justify="start">
              <Space direction="vertical" style={{ width: "100%" }}>
                <Col span={24}>
                  <Form
                    {...layout}
                    name="basic"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                  >
                    <Form.Item
                      name="email"
                      label="E-mail"
                      rules={[
                        {
                          type: "email",
                          message: "The input is not valid E-mail!",
                        },
                        {
                          required: true,
                          message: "Please input your E-mail!",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      label="Password"
                      name="password"
                      rules={[
                        {
                          required: true,
                          message: "Please input your password!",
                        },
                      ]}
                    >
                      <Input.Password />
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                      <Button type="primary" htmlType="submit">
                        Submit
                      </Button>
                    </Form.Item>
                  </Form>
                </Col>
              </Space>
            </Row>
          </Col>
        </Row>
      </LayoutWrapper>
    </>
  );
};

export default Login;
