import {
  EllipsisOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Card, Carousel, Tooltip } from "antd";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../context/cartContext";

const CollectionCard = ({ item }) => {
  const { addProductToCart, checkItemInCart } = useContext(cartContext);
  const [checkItem, setCheckItem] = useState(checkItemInCart(item.id));
  return (
    <div>
      <Card
        hoverable
        style={{ width: 400, margin: "10px 0" }}
        cover={
          <Carousel autoplay>
            <img alt="example" src={item.image1} />
            <img alt="example" src={item.image2} />
            <img alt="example" src={item.image3} />
            <img alt="example" src={item.image4} />
            <img alt="example" src={item.image5} />
          </Carousel>
        }
        actions={[
          <Tooltip placement="topLeft" title="Добавить в избранное">
            <HeartOutlined />
          </Tooltip>,
          <Tooltip placement="topLeft" title="Добавить в корзину ">
            {/* <Link to={"#"} style={{ borderBottom: "1px solid white" }}> */}
            <ShoppingCartOutlined
              onClick={() => {
                addProductToCart(item);
                setCheckItem(checkItemInCart(item.id));
              }}
            />
            {/* </Link> */}
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
  );
};

export default CollectionCard;
