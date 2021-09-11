import React from "react";
import { Layout, Row, Menu } from "antd";
import { useHistory } from "react-router-dom";
import { RouteNames } from "../routes";
import { useTypedSelector } from "../hooks/userTypedSelector";
import { useActions } from "../hooks/useActions";

const Navbar: React.FC = () => {
  const router = useHistory();
  const { isAuth, user } = useTypedSelector((state) => state.authReducer);
  const { logout } = useActions();

  return (
    <Layout.Header>
      <Row justify="end">
        {isAuth ? (
          <>
            <div style={{ color: "white" }}>{user.username}</div>
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item onClick={logout} key={1}>
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
