import AuthPage from "components/AuthPage/AuthPage";
import NikeCollection from "components/Collection/Collection";
import Contact from "components/Contact/Contact";
import Main from "components/Main/Main";
import Register from "components/RegisterPage/RegisterPage";
import Stores from "components/Stores/Stores";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AdminProduct from "./components/AdminProduct/AdminProduct";


const Routing = () => {
  let PUBLIC_ROUTE = [
    
    {
      link: "/",
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
      element: <NikeCollection />,
      id: 4,
    },
    {
      link: "/contact",
      element: <Contact />,
      id: 5,
    },
    {
      link: "/auth",
      element: <AuthPage />,
      id: 5,
    },
    {
      link: "/register",
      element: <Register />,
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
        <Routes>
          {PUBLIC_ROUTE.map((item) => (
            <Route key={item.id} path={item.link} element={item.element} />
          ))}
          {ADMIN_ROUTE.map((item) => (
            <Route key={item.id} path={item.link} element={item.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Routing;
