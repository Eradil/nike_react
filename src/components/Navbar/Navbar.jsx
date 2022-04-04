import { Menu } from "antd";
import {
  HomeOutlined,
  LockOutlined,
  PhoneOutlined,
  ShopOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

class App extends React.Component {
  render() {
    return (
      <Menu
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          fontSize: "1.2rem",
        }}
        mode="horizontal"
      >
        <Link to={"/"}>
          <Menu.Item style={{ color: "black" }} icon={<HomeOutlined />}>
            Main
          </Menu.Item>
        </Link>
        <Link to={"/stores"}>
          <Menu.Item style={{ color: "black" }} icon={<ShopOutlined />}>
            Stores
          </Menu.Item>
        </Link>
        <Link to={"/collection"}>
          <Menu.Item style={{ color: "black" }} icon={<ShoppingCartOutlined />}>
            Collection
          </Menu.Item>
        </Link>
        <Link to={"/contact"}>
          <Menu.Item style={{ color: "black" }} icon={<PhoneOutlined />}>
            Contacts
          </Menu.Item>
        </Link>
        <Link to={"/admin"}>
          <Menu.Item style={{ color: "black" }} icon={<LockOutlined />}>
            Admin
          </Menu.Item>
        </Link>
      </Menu>
    );
  }
}

export default App;
