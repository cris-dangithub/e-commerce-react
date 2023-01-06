import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfig from "../../utils/getConfig";
import { searchProductFromCartById } from "../../utils/searchProductFromCartById";

const cartSlice = createSlice({
  name: 'cart',
  initialState: null,
  reducers: {
    setCartGlobal: (state, action) => action.payload
  }
})
export const { setCartGlobal } = cartSlice.actions
export default cartSlice.reducer

export const getUserCart = () => (dispatch) => {
  const URL = `https://e-commerce-api.academlo.tech/api/v1/cart`
  axios.get(URL, getConfig())
    .then(res => dispatch(setCartGlobal(res.data.data.cart.products))) 
    .catch(err => console.log(err.response.data.message))
}

export const addProductCart = (cart, product, newQuantityPlus = 1) => (dispatch) => {
  const data = {
    id: product.id,
    quantity: newQuantityPlus
  }
  const URL = `https://e-commerce-api.academlo.tech/api/v1/cart`
  axios.post(URL, data, getConfig())
    .then(res => dispatch(getUserCart()))
    .catch(err => {
      if (err.response.data.message === 'You already added this product to the cart') {
        console.log(product);
        const dataToUpdate = {
          id: product.id,
          newQuantity: searchProductFromCartById(cart, product).productsInCart.quantity + newQuantityPlus
        }
        dispatch(updateUserCart(dataToUpdate))
      }
    })
}

export const updateUserCart = (data) => (dispatch) => {
  const URL = `https://e-commerce-api.academlo.tech/api/v1/cart`
  axios.patch(URL, data, getConfig())
    .then(res => dispatch(getUserCart()))
    .catch(err => console.log(err))
}

export const deleteProduct = (id) => (dispatch) => {
  const URL = `https://e-commerce-api.academlo.tech/api/v1/cart/${id}`
  axios.delete(URL, getConfig())
    .then(res => dispatch(getUserCart()))
    .catch(err => console.log(err))
}
