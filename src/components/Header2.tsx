import React from "react";
import { ArrowLeftOutlined, LogoutOutlined } from "@ant-design/icons";
import { Row, Col, Typography } from "antd";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { GLOBAL_DATA, DELETE_DATA } from "../redux/actionTypes";
import AsyncStorage from "@react-native-community/async-storage";
const { Text } = Typography;

const Header = (propsValue: any) => {
  const history = useHistory();
  const global_data = useSelector((state: any) => state.Reducer);
  const dispatch = useDispatch();

  var props = propsValue.params;

  const onBack = () => {
    if (
      history.location.pathname == "/table" &&
      global_data.currentPage != ""
    ) {
      dispatch({
        type: GLOBAL_DATA,
        payload: { currentPage: "", currentRowId: "" },
      });
      history.push("/userlist");
    } else {
      history.goBack();
    }
  };
  const logout = () => {
    dispatch({ type: DELETE_DATA, payload: {} });
    history.push("/");
  };
  console.log(global_data.header.logout);
  return (
    <>
      <Row
        className="header"
        style={{ backgroundColor: "#4a4e4d", textAlign: "center", height: 60 }}
        align="middle"
      >
        {!global_data.header.rootPage && (
          <Col span={1}>
            <ArrowLeftOutlined
              onClick={onBack}
              style={{ fontSize: "16px", color: "#fff" }}
            />
          </Col>
        )}
        <Col
          span={
            global_data.header.rootPage && !global_data.header.logout
              ? 24
              : !global_data.header.rootPage && global_data.header.logout
              ? 22
              : 23
          }
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 24,
              fontWeight: 600,
              textTransform: "capitalize",
            }}
          >
            {props.titleName}
          </Text>
        </Col>
        {global_data.header.logout && (
          <Col span={1}>
            <LogoutOutlined
              onClick={logout}
              style={Object.assign({}, { fontSize: "16px", color: "#fff" })}
            />
          </Col>
        )}
      </Row>
    </>
  );
};

export default Header;
