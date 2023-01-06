
export const getImgsById = (productsGlobal, product) => (
  productsGlobal.find(productGlobal => productGlobal.id === product.id)
)
