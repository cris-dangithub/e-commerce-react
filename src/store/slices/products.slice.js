import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productsSlice = createSlice({
  name: 'products',
  initialState: null, //No se le puede poner undefined, pues sale error!!
  reducers: {
    setProductsGlobal: (state, action) => action.payload,
    ascendingOrderProducts: state => {
      state.sort((a, b) => +a.price - +b.price)
    },
    descendingOrderProducts: state => {
      state.sort((a, b) => +b.price - +a.price)
    }
  }
})

export const { setProductsGlobal, ascendingOrderProducts, descendingOrderProducts } = productsSlice.actions
export default productsSlice.reducer

export const getAllProducts = () => (dispatch) => {
  const URL = `https://e-commerce-api.academlo.tech/api/v1/products`
  axios.get(URL)
    .then(res => dispatch(setProductsGlobal(res.data.data.products)))
    .catch(err => console.log(err))
}

export const getProductsByCategory = (id) => (dispatch) => {
  const URL = `https://e-commerce-api.academlo.tech/api/v1/products?category=${id}` //! Esto es una query
  axios.get(URL)
    .then(res => dispatch(setProductsGlobal(res.data.data.products)))
    .catch(err => console.log(err))
}