import React from "react";

import Routing from "./Routing";
import "./App.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import ContextProductsProvider from "./context/contextProducts";
import CartContextProvider from "./context/cartContext";
import AuthContextProvider from "./context/authContext";
import CommentContextProvider from "./context/commentContext";
const App = () => {
  return (
    <CommentContextProvider>
      <AuthContextProvider>
        <ContextProductsProvider>
          <CartContextProvider>
            <Routing />
          </CartContextProvider>
        </ContextProductsProvider>
      </AuthContextProvider>
    </CommentContextProvider>
  );
};

export default App;
