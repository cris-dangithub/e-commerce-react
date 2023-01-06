import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import CardProduct from '../components/Home/CardProduct'
import ProductDescription from '../components/ProductInfo/ProductDescription'
import usePetitions from '../hooks/usePetitions'

const ProductInfo = () => {
  const [product, setProduct] = useState()
  const [similarProducts, setSimilarProducts] = useState()
  const { products } = useSelector(state => state)
  const { id } = useParams()
  const { getProductById } = usePetitions()
  useEffect(() => {
    getProductById(id, setProduct)
  }, [id])
  useEffect(() => {
    if (products && product) {
      const similarProductsArray = products.filter(productGlobal => (
        productGlobal.category.name === product.category && productGlobal.title !== product.title
      ))
      setSimilarProducts(similarProductsArray)
    }
  }, [products, product])

  return (
    <article>
      <ProductDescription
        product={product}
      />
      <section>
        <h2>Discover similar items</h2>
        <div>
          {
            similarProducts?.map(similarProduct => (
            <CardProduct
              key={similarProduct.id}
              product={similarProduct}
            />
          ))
          }
        </div>
      </section>
    </article>
  )
}

export default ProductInfo