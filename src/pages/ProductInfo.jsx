/* ============================ IMPORTS ============================ */
//Hooks
import React, { useEffect, useState } from 'react'
//Redux
import { useSelector } from 'react-redux'
//Router
import { useParams } from 'react-router-dom'
//Components
import CardProduct from '../components/Home/CardProduct'
import ProductDescription from '../components/ProductInfo/ProductDescription'
import Slider from '../components/ProductInfo/Slider'
//Custom hooks
import usePetitions from '../hooks/usePetitions'
//CSS
import './styles/ProductInfo.css'
/* ======================================================================== */

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
  console.log(product);
  return (
    <article className='c-product-info'>
      <section className='product-info__slider'>
        <Slider
          product={product}
        />
      </section>
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