import {
  EllipsisOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Card, Tooltip } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const CollectionCard = ({ item }) => {
  return (
    <div>
      <Card
        style={{ width: 300 }}
        cover={<img alt="example" src={item.image1} />}
        actions={[
          <Tooltip placement="topLeft" title="Добавить в избранное">
            <HeartOutlined key="setting" />
          </Tooltip>,
          <Tooltip placement="topLeft" title="Добавить в корзину">
            <Link style={{ borderBottom: "1px solid white" }}>
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
  );
};

export default CollectionCard;
