/* ============================ IMPORTS ============================ */
import React from 'react'
//Redux
import { useDispatch, useSelector } from 'react-redux';
import { addProductCart, deleteProduct, updateUserCart } from '../../store/slices/cart.slice';
//Router
import { useNavigate } from 'react-router-dom';
//Utils
import { getImgsById } from '../../utils/getImgsById';
//CSS
import './styles/ProductInCart.css'
/* ======================================================================== */
const ProductInCart = ({ cartProduct, allProductsQuantity }) => {
  const navigate = useNavigate()
  const { products, cart } = useSelector(state => state)
  const dispatch = useDispatch()
  const handleTrashBtn = e => {
    e.stopPropagation()
    dispatch(deleteProduct(cartProduct.id))
  }
  const handleCardClick = () => {
    navigate(`/product/${cartProduct.id}`)
  }
  const handleMinus = e => {
    e.stopPropagation()
    if (cartProduct.productsInCart.quantity - 1 > 0) {
      const data = {
        id: cartProduct.id,
        newQuantity: cartProduct.productsInCart.quantity - 1
      }
      dispatch(updateUserCart(data))
    }
  }
  const handlePlus = e => {
    e.stopPropagation()
    dispatch(addProductCart(cart, cartProduct))
  }
  return (
    <article className='c-product-in-cart' onClick={handleCardClick}>
      <button className='product-in-cart__trash' onClick={handleTrashBtn}>
        <i className="fa-regular fa-trash-can"></i>
      </button>
      <header className='product-in-cart__header'>
        <img
          className='product-in-cart__img'
          src={products.length === allProductsQuantity ? getImgsById(products, cartProduct).productImgs[0] : ''}
          alt=""
        />
        <section className='product-in-cart__name-container'>
          <span className='product-in-cart__brand'>{cartProduct.brand}</span>
          <h3 className='product-in-cart__name'>{cartProduct.title}</h3>
        </section>
      </header>
      <div className='product-in-cart__quantity-container'>
        <button className='product-in-cart__btn-quantity' onClick={handleMinus}>-</button>
        <span className='product-in-cart__quantity'>{cartProduct.productsInCart.quantity}</span>
        <button className='product-in-cart__btn-quantity' onClick={handlePlus}>+</button>
      </div>
      <footer className='product-in-cart__footer'>
        <div className='product-in-cart__price-container'>
          <span className='product-in-cart__unit-price-txt'>Unit price:</span>
          <h4 className='product-in-cart__unit-price-nmbr'>$ {cartProduct.price}</h4>
        </div>
        <div className='product-in-cart__price-container'>
          <span className='product-in-cart__subtotal-txt'>Subtotal:</span>
          <h4 className='product-in-cart__subtotal-nmbr'>$ {(cartProduct.price * cartProduct.productsInCart.quantity).toFixed(2)}</h4>
        </div>
      </footer>
    </article>
  )
}

export default ProductInCart