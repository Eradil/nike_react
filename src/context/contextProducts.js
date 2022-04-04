import axios from "axios";
import React, { useReducer } from "react";
//
export const contextProducts = React.createContext();
//
//
//cases
const CASE_GET_PRODUCTS = "CASE_GET_PRODUCTS";
const CASE_GET_ONE_PRODUCT = "CASE_GET_ONE_PRODUCT";
// cases end
//
let API = "http://localhost:8001/products";
//
const INIT_STATE = {
  products: [],
  oneProduct: null,
};

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case CASE_GET_PRODUCTS:
      return {
        ...state,
        products: action.payload.data,
      };
    case CASE_GET_ONE_PRODUCT:
      return {
        ...state,
        oneProduct: action.payload.data,
      };
    default:
      return state;
  }
};

const ContextProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getProducts() {
    let result = await axios(API);
    console.log(result);
    dispatch({
      type: CASE_GET_PRODUCTS,
      payload: result,
    });
  }
  async function deleteProduct(id) {
    await axios.delete(`${API}/${id}`);
    console.log(id);
    getProducts();
  }
  async function createProduct(newProduct) {
    await axios.post(API, newProduct);
    getProducts();
  }
  async function getOneProduct(id) {
    let result = await axios(`${API}/${id}`);
    dispatch({
      type: CASE_GET_ONE_PRODUCT,
      payload: result,
    });
  }
  async function editProduct(id, editedProduct) {
    await axios.patch(`${API}/${id}`, editedProduct);
    getProducts();
  }

  return (
    <div>
      <contextProducts.Provider
        value={{
          products: state.products,
          oneProduct: state.oneProduct,
          getProducts,
          deleteProduct,
          createProduct,
          getOneProduct,
          editProduct,
        }}
      >
        {children}
      </contextProducts.Provider>
    </div>
  );
};

export default ContextProductsProvider;
