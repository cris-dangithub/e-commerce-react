import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductInCart from '../components/Cart/ProductInCart';
import { purchaseCart } from '../store/slices/purchases.slice';

const Cart = () => {
  const { cart } = useSelector(state => state)
  const dispatch = useDispatch()
  const handleButton = () => {
    dispatch(purchaseCart())
  }
  
  console.log(cart);
  return (
    <article>
      <header>
        <h2>Shopping Cart</h2>
      </header>
      <div>
        {
          cart?.map(cartProduct => (
            <ProductInCart
              key={cartProduct.id}
              cartProduct={cartProduct}
            />
          ))
        }
      </div>
      <footer>
        <span>Total</span>
        <h3>
          {
            cart ?
              cart.reduce((acc, el) => (
                (el.price * el.productsInCart.quantity) + acc
              ), 0)
              :
              0
          }
        </h3>
        <button onClick={handleButton}>Checkout</button>
      </footer>
    </article>
  )
}

export default Cart