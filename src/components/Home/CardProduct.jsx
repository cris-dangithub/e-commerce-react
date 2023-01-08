/* ============================ IMPORTS ============================ */
//Hooks
import { useEffect, useState } from 'react'
//Redux
import { useDispatch, useSelector } from 'react-redux'
import { addProductCart, getUserCart } from '../../store/slices/cart.slice'
//Router
import { useNavigate } from 'react-router-dom'
//CSS
import './styles/CardProduct.css'
/* ======================================================================== */

const CardProduct = ({ product, setFirstBtnClicked, firstBtnClicked }) => {
  const { cart } = useSelector(state => state)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleClick = e => {
    navigate(`/product/${product.id}`)
  }
  const handleBtnClick = e => {
    e.stopPropagation()
    dispatch(addProductCart(cart, product))
    setFirstBtnClicked(firstBtnClicked + 1)
  }
  

  return (
    <article className='c-card-product' onClick={handleClick}>
      <header className='card-product__header'>
        <div className='card-product__img-container'>
          <img className='card-product__img' src={product.productImgs[0]} alt={`${product.title} image`} />
          <img className='card-product__img' src={product.productImgs[1]} alt={`${product.title} image`} />
        </div>
      </header>
      <h3 className='card-product__title'>{product.title}</h3>
      <footer className='card-product__footer'>
        <div className="card-product__price-container">
          <span className='card-product__price-text'>Price</span>
          <h4 className='card-product__price-nmber'>$ {product.price}</h4>
        </div>
        <button className='card-product__btn' onClick={handleBtnClick}>
          <i className="fa-solid fa-cart-plus"></i>
        </button>
      </footer>
    </article>
  )
}

export default CardProduct