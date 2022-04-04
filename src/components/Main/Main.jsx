import React from "react";
import "./Main.css";
// import {Button} from 'antd'
import video from "../../media/video.mp4";
import img1 from "../../media/img1.jpeg";
import img2 from "../../media/img2.jpeg";
import img3 from "../../media/img3.png";
import img4 from "../../media/img4.png";
import img5 from "../../media/img5.png";
import img6 from "../../media/img6.png";

const Main = () => {
  return (
    <div>
      {/* <div> */}
      <video className="main-video" autoPlay muted loop src={video} />
      {/* </div> */}
      <div className="main-section-2">
        <h4 className="main-title">NIKELAND ON ROBLOX</h4>
        <div className="main-btns">
          <button className="btn btn-1">Discover Airtopia</button>
          <button className="btn btn-2">Shop Kids'</button>
        </div>
      </div>
      <p className="p2">Discover Our Apps</p>
      <div className="main-img">
        <img alt="img" src={img1} />
        <img alt="img" src={img2} />
      </div>
      <p className="p2">Join Us</p>
      <img alt="img" id="img3" style={{ width: "98%" }} src={img3} />
      <p className="p2">More Nike</p>
      <div className="main-img2">
        <img alt="img" src={img4} />
        <img alt="img" src={img5} />
        <img alt="img" src={img6} />
      </div>
    </div>
  );
};

export default Main;
