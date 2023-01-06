import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addProductCart } from '../../store/slices/cart.slice'

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
    <article>
      <h2>{product?.title}</h2>
      <p>{product?.description}</p>
      <footer>
        <section>
          <span>Price</span>
          <h3>{product?.price}</h3>
        </section>
        <div>
          <span>Quantity</span>
          <div>
            <button onClick={handleMinus}>-</button>
            <span>{counter}</span>
            <button onClick={handlePlus}>+</button>
          </div>
        </div>
        <button onClick={handleAddToCart}>Add to cart <i className="fa-solid fa-cart-plus"></i></button>
      </footer>
    </article>
  )
}

export default ProductDescription