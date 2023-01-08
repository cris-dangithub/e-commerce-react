/* ============================ IMPORTS ============================ */
//Hooks
import React, { useState } from 'react'
//Redux
import { useDispatch, useSelector } from 'react-redux'
import { addProductCart } from '../../store/slices/cart.slice'
//CSS
import './styles/ProductDescription.css'
/* ======================================================================== */

const ProductDescription = ({ product }) => {
  const [counter, setCounter] = useState(1)
  const { cart } = useSelector(state => state)
  const dispatch = useDispatch()
  const handleMinus = () => {
    if (counter - 1 > 0) setCounter(counter - 1)
  }
  const handlePlus = () => {
    setCounter(counter + 1)
  }
  const handleAddToCart = () => {
    dispatch(addProductCart(cart, product, counter))
    setCounter(1)
  }

  return (
    <article className='c-product-description'>
      <h2 className='purchases__title'>{product?.title}</h2>
      <p className='product-description__description'>{product?.description}</p>
      <footer className='product-description__footer'>
        <section className='product-description__price-cntainer'>
          <span className='card-product__price-text'>Price</span>
          <h3 className='product-description__price-nmbr'>$ {product?.price}</h3>
        </section>
        <div className='product-description__quantity-container'>
          <span className='card-product__price-text'>Quantity</span>
          <div className='product-in-cart__quantity-container product-description__quantity-btns-container' >
            <button className='product-in-cart__btn-quantity' onClick={handleMinus}>-</button>
            <span className='product-description__quantity-nmbr'>{counter}</span>
            <button className='product-in-cart__btn-quantity' onClick={handlePlus}>+</button>
          </div>
        </div>
        <button onClick={handleAddToCart} className='product-description__add-btn'>
          <span>Add to cart</span>
          <i className="fa-solid fa-cart-plus"></i>
        </button>
      </footer>
    </article>
  )
}

export default ProductDescription