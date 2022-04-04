// import { Empty } from "antd";
import {
  EllipsisOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Card, Carousel, Tooltip } from "antd";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { contextProducts } from "../../context/contextProducts";
// import CollectionCard from "./CollectionCard";

const CollectionList = () => {
  const { getProducts, products } = useContext(contextProducts);
  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);
  return (
    <div className="container">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          margin: "10px auto",
        }}
        className="container"
      >
        {products.map((item) => (
          <div key={item.id}>
            <Card
              hoverable
              style={{ width: 400, margin: "10px 0" }}
              cover={
                <Carousel autoplay>
                  <img alt="example" src={item.image1} />
                  <img alt="example" src={item.image2} />
                </Carousel>
              }
              actions={[
                <Tooltip placement="topLeft" title="Добавить в избранное">
                  <HeartOutlined />
                </Tooltip>,
                <Tooltip placement="topLeft" title="Добавить в корзину ">
                  <Link to={"#"} style={{ borderBottom: "1px solid white" }}>
                    <ShoppingCartOutlined />
                  </Link>
                </Tooltip>,
                <Tooltip placement="topLeft" title="Details">
                  <Link
                    style={{ borderBottom: "1px solid white" }}
                    to={`/collection/${item.id}`}
                  >
                    <EllipsisOutlined key="ellipsis" />
                  </Link>
                </Tooltip>,
              ]}
            >
              <p>{item.model}</p>
              <p>{item.price}$</p>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionList;
