export const searchProductFromCartById = (cart, product) => {
  for (let cartProduct of cart) {
    if (cartProduct.id === product.id) {
      return cartProduct
    }
  }
}