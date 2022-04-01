import React from "react";
<<<<<<< HEAD
import Main from "./components/Main/Main";
import 'antd/dist/antd.css';
import Footer from "./components/Footer/Footer";

const App = () => {
  return <div>
          <Main/>
          <Footer/>
    </div>;
=======
import Routing from "./Routing";
import "./App.css";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
const App = () => {
  return <Routing />;
>>>>>>> 1c3b833e174185ba592c6be0da3237e4a60208ac
};

export default App;
