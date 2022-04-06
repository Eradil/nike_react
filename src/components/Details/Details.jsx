import { Button, Col, Row } from "antd";
import React, { useContext, useEffect} from "react";
import { useParams } from "react-router-dom";
import { contextProducts } from "../../context/contextProducts";
// import { data } from "../../helpers/data";

const Details = () => {

  const { getOneProduct, oneProduct } = useContext(contextProducts);
  const params = useParams();

  useEffect(() => {
    getOneProduct(params.id);
  }, []);
  // console.log(oneProduct);

  return oneProduct ? (
    
    <div className="container">
      <Row style={{ alignItems: "center", display: "flex" }}>
        <Col span={12} style={{ margin: "20px 0" }}>
          <div>
            <img width={"400px"} src={oneProduct.image1} alt="image" />
          </div>
        </Col>
        <Col span={12} style={{ margin: "20px 0" }}>
          <div>
            <h3>{oneProduct.brand}</h3>
            <h3>{oneProduct.price}$</h3>
            <h3>{oneProduct.description}</h3>
          </div>
          <Button >Добавить в корзину</Button>
        </Col>
      </Row>
    </div>
  ) : null;
};

export default Details;
