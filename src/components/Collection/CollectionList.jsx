// import { Empty } from "antd";
import {
  EllipsisOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Card, Carousel, Empty, Input, Pagination, Tooltip } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { contextProducts } from "../../context/contextProducts";
import { useSearchParams } from "react-router-dom";
import Filters from "../Filters/Filters";
import video3 from "../../media/video3.mp4";
import CollectionCard from "./CollectionCard";

const CollectionList = () => {
  const { getProducts, products, productsCount } = useContext(contextProducts);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState(
    searchParams.get("q") ? searchParams.get("q") : ""
  );
  const [model, setModel] = useState([]);
  const [price, setPrice] = useState([1, 1000]);
  const [page, setPage] = useState(
    searchParams.get("_page") ? searchParams.get("_page") : 1
  );
  const [limit, setLimit] = useState(20);
  useEffect(() => {
    setSearchParams({
      q: searchValue,
      _page: page,
      _limit: limit,
      model: model,
      price_gte: price[0],
      price_lte: price[1],
    });
  }, []);
  useEffect(() => {
    getProducts();
  }, [searchParams]);
  useEffect(() => {
    setSearchParams({
      q: searchValue,
      _page: page,
      _limit: limit,
      model: model,
      price_gte: price[0],
      price_lte: price[1],
    });
  }, [searchValue, model, price, page, limit]);
  console.log(products);
  return (
    <div className="container">
      <video className="main-video" autoPlay muted loop src={video3} />

      <Filters
        model={model}
        setModel={setModel}
        price={price}
        setPrice={setPrice}
      />
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
            <CollectionCard key={item.id} item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollectionList;
