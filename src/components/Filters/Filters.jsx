import React from 'react';
import { Select, Slider } from 'antd';
import { models } from '../../helpers/models';

const Filters = ({ brand, setBrand, price, setPrice }) => {
    return (
        <div style={{ marginTop: "20px" }}>
            <Select value={brand} onChange={(e) => setBrand(e)} placeholder="Filter by brand" style={{ width: "100%" }} allowClear mode='multiple'>
                {models.map((item) => (<Select.Option
                    key={item.id} value={item.brand}>{item.brand}</Select.Option>))}
            </Select>
            <Slider value={price} onChange={(e) => setPrice(e)} defaultValue={[1, 1000000]} min={0} max={1000000} step={100} range />
        </div>
    );
};

export default Filters;