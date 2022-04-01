import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AdminProduct from "./components/AdminProduct/AdminProduct";
import Collection from "./components/Collection/Collection";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Main from "./components/Main/Main";
import Stores from "./components/Stores/Stores";

const Routing = () => {
  let PUBLIC_ROUTE = [
    {
      link: "/",
      element: <Home />,
      id: 1,
    },
    {
      link: "/main",
      element: <Main />,
      id: 2,
    },
    {
      link: "/stores",
      element: <Stores />,
      id: 3,
    },
    {
      link: "/collection",
      element: <Collection />,
      id: 4,
    },
    {
      link: "/contact",
      element: <Contact />,
      id: 5,
    },
  ];
  let ADMIN_ROUTE = [
    {
      link: "/admin",
      element: <AdminProduct />,
      id: 1,
    },
  ];

  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          {PUBLIC_ROUTE.map((item) => (
            <Route key={item.id} path={item.link} element={item.element} />
          ))}
          {ADMIN_ROUTE.map((item) => (
            <Route key={item.id} path={item.link} element={item.element} />
          ))}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Routing;
