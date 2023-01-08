import { configureStore } from "@reduxjs/toolkit";
import cart from "./slices/cart.slice";
import marginBottomRoute from "./slices/marginBottomRoute.slice";
import products from "./slices/products.slice";
import purchases from "./slices/purchases.slice";

export default configureStore({
  reducer: {
    products,
    cart,
    purchases,
    marginBottomRoute
  }
})