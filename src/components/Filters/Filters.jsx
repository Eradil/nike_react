import React from "react";
import { Select, Slider } from "antd";
import { nikeCollection } from "../Collection/CollectionDB";

const Filters = ({ model, setModel, price, setPrice }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <Select
        value={model}
        onChange={(e) => setModel(e)}
        placeholder="Filter by brand"
        style={{ width: "50%" }}
        allowClear
        mode="multiple"
      >
        {nikeCollection.map((item) => (
          <Select.Option key={item.id} value={item.model}>
            {item.model}
          </Select.Option>
        ))}
      </Select>
      <Slider
        value={price}
        onChange={(e) => setPrice(e)}
        defaultValue={[1, 1000]}
        min={0}
        max={1000}
        step={10}
        range
        style={{ width: "50%" }}
      />
    </div>
  );
};

export default Filters;
