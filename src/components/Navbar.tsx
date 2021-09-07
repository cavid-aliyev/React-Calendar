import React from "react";
import { Layout, Row, Menu } from "antd";
import { useHistory } from "react-router-dom";
import { RouteNames } from "../routes";
import { useTypedSelector } from "../hooks/userTypedSelector";

const Navbar: React.FC = () => {
  const router = useHistory();
  const {isAuth} = useTypedSelector(state => state.authReducer)

  return (
    <Layout.Header>
      <Row justify="end">
        {isAuth ? (
          <>
            <div style={{ color: "white" }}>Javid Aliyev</div>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item onClick={() => console.log("logout")} key={1}>
                Logout
              </Menu.Item>
            </Menu>
          </>
        ) : (
          <Menu theme="dark" mode="horizontal" selectable={false}>
            <Menu.Item onClick={() => router.push(RouteNames.LOGIN)} key={1}>
              Login
            </Menu.Item>
          </Menu>
        )}
      </Row>
    </Layout.Header>
  );
};

export default Navbar;
