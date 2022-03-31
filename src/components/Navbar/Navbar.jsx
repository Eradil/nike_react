import { CloseOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const NAV_ITEMS = [
    {
      title: "Main",
      link: "/main",
      id: 1,
    },
    {
      title: "Stores",
      link: "/stores",
      id: 2,
    },
    {
      title: "Collection",
      link: "/collection",
      id: 3,
    },
    {
      title: "Contact",
      link: "/contact",
      id: 4,
    },
  ];
  const location = useLocation();
  return (
    <div className="navbar">
      <div className="navbar_top">
        <CloseOutlined id="navbar_top_icon" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="pre-logo-svg1"
          fill="currentColor"
          viewBox="0 0 69 32"
        >
          <path d="M68.56 4L18.4 25.36Q12.16 28 7.92 28q-4.8 0-6.96-3.36-1.36-2.16-.8-5.48t2.96-7.08q2-3.04 6.56-8-1.6 2.56-2.24 5.28-1.2 5.12 2.16 7.52Q11.2 18 14 18q2.24 0 5.04-.72z"></path>
        </svg>
      </div>

      <div className="nav_btn">
        <Button type="primary " shape="round">
          Join us
        </Button>
        <Button type="default" shape="round">
          Sign in
        </Button>
      </div>
      {NAV_ITEMS.map((item) => (
        <Link
          className={
            location.pathname === item.link
              ? "navbar-item-active"
              : "navbar-item"
          }
          key={item.id}
          to={item.link}
        >
          {item.title}
        </Link>
      ))}
      <Link
        to="/admin"
        className={
          location.pathname === "/admin" ? "navbar-item-active" : "navbar-item"
        }
      >
        ADMIN
      </Link>
    </div>
  );
};

export default Navbar;
