// import { Empty } from "antd";
import {
  EllipsisOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Card, Carousel, Empty, Input, Pagination, Tooltip } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { contextProducts } from "../../context/contextProducts";
// import CollectionCard from "./CollectionCard";

const CollectionList = () => {
  const { getProducts, products, productsCount } = useContext(contextProducts);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  const [page, setPage] = useState(
    searchParams.get("_page") ? searchParams.get("_page") : 1
  );
  const [limit, setLimit] = useState(
    searchParams.get("_limit") ? searchParams.get("_limit") : 4
  );
  useEffect(() => {
    setSearchParams({
      q: searchValue,
      _page: page,
      _limit: limit,
    });
  }, []);
  console.log(products);
  useEffect(() => {
    setSearchParams({
      q: searchValue,
      _page: page,
      _limit: limit,
    });
  }, [searchValue, page, limit]);
  useEffect(() => {
    getProducts();
  }, [searchParams]);

  console.log(products, productsCount);

  return (
    <div className="container">
      <div>
        <Input.Search
          placeholder="Search..."
          style={{ width: "25vw" }}
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
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

            <br />
          </div>
        ))}
        <div
          className="container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Pagination
            total={+productsCount}
            current={+page}
            pageSize={+limit}
            defaultCurrent={1}
            onChange={(page, limit) => {
              setPage(page);
              setLimit(limit);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CollectionList;
