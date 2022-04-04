import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import CollectionList from "./components/Collection/CollectionList";

import CollectionList from "./components/Collection/CollectionList";
import Contact from "./components/Contact/Contact";
import Details from "./components/Details/Details";
import EditProduct from "./components/EditProduct/EditProduct";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

import Main from "./components/Main/Main";
import Stores from "./components/Stores/Stores";
import AdminPages from "./pages/AdminPages";

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
      element: <CollectionList />,
      id: 4,
    },
    {
      link: "/contact",
      element: <Contact />,
      id: 5,
    },
    {
      link: "/collection/:id",
      element: <Details />,
      id: 6,
    },
  ];
  let ADMIN_ROUTE = [
    {
      link: "/admin",
      element: <AdminPages />,
      id: 1,
    },
    {
      link: "/edit/:id",
      element: <EditProduct />,
      id: 2,
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
