export const searchProductFromCartById = (cart, product) => {
  console.log(cart);
  for (let cartProduct of cart) {
    if (cartProduct.id === product.id) {
      return cartProduct
    }
  }
}