import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfig from "../../utils/getConfig";
import { setCartGlobal } from "./cart.slice";



const purchasesSlice = createSlice({
  name: 'purchases',
  initialState: null,
  reducers: {
    setPurchasesGlobal: (status, action) => action.payload
  }
})

export const { setPurchasesGlobal } = purchasesSlice.actions
export default purchasesSlice.reducer


export const getPurchases = () => (dispatch) => {
  const URL = `https://e-commerce-api.academlo.tech/api/v1/purchases`
  axios.get(URL, getConfig())
    .then(res => dispatch(setPurchasesGlobal(res.data.data.purchases)))
    .catch(err => console.log(err))
}

export const purchaseCart = () => (dispatch) => {
  const URL = `https://e-commerce-api.academlo.tech/api/v1/purchases`
  const data = {
    street: "Green St. 1456",
    colony: "Southwest",
    zipCode: 12345,
    city: "USA",
    references: "Some references"
  }
  axios.post(URL, data, getConfig())
    .then(res => {
      dispatch(getPurchases())
      dispatch(setCartGlobal(null))
    })
    .catch(err => console.log(err))
}