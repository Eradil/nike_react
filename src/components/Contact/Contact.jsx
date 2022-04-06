import React from "react";
import mobile from "../../media/mobile.svg";
import message from "../../media/message.svg";
import brand from "../../media/brand.png";

const Contact = () => {
  return (
    <div className="container">
      <h1>CONTACT US</h1>
      <div style={{ width: "100%", height: "5px", color: "black" }}></div>
      <div className="contacts-container">
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              alt="img"
              style={{ width: "70px", marginBottom: "10px" }}
              src={mobile}
            />
            <br />
            <a href="https://www.nike.com/LiveChat?bu=Commerce%20-%20Global%20Store&country=AE&language=en&referenceUrl=https://www.nike.com/ae/help/#contact">
              PRODUCTS & ORDERS
            </a>
            <p>971800049887</p>
            <p>24 hours a day</p>
            <p>7 days a week</p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              alt="img"
              style={{ width: "70px", marginBottom: "10px" }}
              src={mobile}
            />
            <br />
            <a href="https://www.nike.com/LiveChat?bu=Commerce%20-%20Global%20Store&country=AE&language=en&referenceUrl=https://www.nike.com/ae/help/#contact">
              NRC & NTC
            </a>
            <p>+31 (0) 20 5820542</p>
            <p>12:00–21:00</p>
            <p>Monday–Friday</p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              alt="img"
              style={{ width: "70px", marginBottom: "10px" }}
              src={message}
            />
            <br />
            <a href="https://www.nike.com/LiveChat?bu=Commerce%20-%20Global%20Store&country=AE&language=en&referenceUrl=https://www.nike.com/ae/help/#contact">
              PRODUCTS & ORDERS
            </a>
            <p>Chat with us</p>
            <p>24 hours a day</p>
            <p>7 days a week</p>
          </div>
        </div>
        <div style={{ marginTop: "30px", marginLeft: "180px" }}>
          <img
            alt="img"
            style={{ width: "70px", marginBottom: "10px" }}
            src={brand}
          />
          <br />
          <a
            style={{ marginLeft: "-20px" }}
            href="https://www.nike.com/LiveChat?bu=Commerce%20-%20Global%20Store&country=AE&language=en&referenceUrl=https://www.nike.com/ae/help/#contact"
          >
            STORE LOCATOR
          </a>
          <p style={{ marginLeft: "-50px" }}>
            Find Nike retail stores near you
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
