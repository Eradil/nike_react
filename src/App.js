import React from "react";

import Routing from "./Routing";
import "./App.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import ContextProductsProvider from "./context/contextProducts";
import AuthContextProvider from "./context/authContext";
const App = () => {
  return (
    <AuthContextProvider>
      <ContextProductsProvider>
        <Routing />
      </ContextProductsProvider>
    </AuthContextProvider>
  );
};

export default App;
