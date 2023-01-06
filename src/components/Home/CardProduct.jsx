import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addProductCart } from '../../store/slices/cart.slice'

const CardProduct = ({ product }) => {
  const { cart } = useSelector(state => state)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleClick = e => {
    navigate(`/product/${product.id}`)
  }
  const handleBtnClick = e => {
    e.stopPropagation()
    dispatch(addProductCart(cart, product))
  }


  return (
    <article className='temporal' onClick={handleClick}>
      <header>
        <img src={product.productImgs[0]} alt={`${product.title} image`} />
        <img src={product.productImgs[1]} alt={`${product.title} image`} />
      </header>
      <section>
        <h3>{product.title}</h3>
      </section>
      <footer>
        <span>price</span>
        <h4>$ {product.price}</h4>
        <button onClick={handleBtnClick}><i className="fa-solid fa-cart-plus"></i></button>
      </footer>
    </article>
  )
}

export default CardProduct