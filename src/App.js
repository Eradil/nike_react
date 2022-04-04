import React from "react";

import Routing from "./Routing";
import "./App.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import ContextProductsProvider from "./context/contextProducts";
const App = () => {
  return (
    <ContextProductsProvider>
      <Routing />
    </ContextProductsProvider>
  );
};

export default App;
