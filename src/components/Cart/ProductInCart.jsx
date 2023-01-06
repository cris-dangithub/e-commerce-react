import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addProductCart, deleteProduct, updateUserCart } from '../../store/slices/cart.slice';
import { getImgsById } from '../../utils/getImgsById';

const ProductInCart = ({ cartProduct }) => {
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
    <article className='temporal' onClick={handleCardClick}>
      <button onClick={handleTrashBtn}>
        <i className="fa-regular fa-trash-can"></i>
      </button>
      <header>
        <img src={getImgsById(products, cartProduct).productImgs[0]} alt="" />
        <section>
          <span>{cartProduct.brand}</span>
          <h3>{cartProduct.title}</h3>
        </section>
      </header>
      <div>
        <button onClick={handleMinus}>-</button>
        <span>{cartProduct.productsInCart.quantity}</span>
        <button onClick={handlePlus}>+</button>
      </div>
      <footer>
        <div>
          <span>Unit price:</span>
          <h4>{cartProduct.price}</h4>
        </div>
        <div>
          <span>Subtotal:</span>
          <h4>{(cartProduct.price * cartProduct.productsInCart.quantity).toFixed(2)}</h4>
        </div>
      </footer>
    </article>
  )
}

export default ProductInCart