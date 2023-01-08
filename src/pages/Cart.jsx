/* ============================ IMPORTS ============================ */
//Hooks
import React, { useEffect } from 'react'
//Redux
import { useDispatch, useSelector } from 'react-redux'
import { getUserCart } from '../store/slices/cart.slice';
import { getAllProducts } from '../store/slices/products.slice';
import { purchaseCart } from '../store/slices/purchases.slice';
//Components
import ProductInCart from '../components/Cart/ProductInCart';
//CSS
import './styles/Cart.css'
import { marginActive } from '../store/slices/marginBottomRoute.slice';
/* ======================================================================== */

const Cart = ({ allProductsQuantity }) => {
  const { cart } = useSelector(state => state)
  const dispatch = useDispatch()
  const handleButton = () => {
    dispatch(purchaseCart())
  }
  useEffect(() => {
    dispatch(getUserCart())
    dispatch(getAllProducts())
    dispatch(marginActive())
  }, [])

  return (
    <article className='c-cart'>
      <header className='cart__header'>
        <h2 className='purchases__title'>Shopping Cart</h2>
      </header>
      <div className='cart__products-container'>
        {
          cart?.map(cartProduct => (
            <ProductInCart
              key={cartProduct.id}
              cartProduct={cartProduct}
              allProductsQuantity={allProductsQuantity}
            />
          ))
        }
      </div>
      <footer className='cart-footer'>
        <span className='cart-footer__total-txt'>Total</span>
        <h3 className='cart-footer__total-nbr'>
          $
          {
            cart ?
              cart.reduce((acc, el) => (
                (el.price * el.productsInCart.quantity) + acc
              ), 0).toFixed(2)
              :
              0
          }
        </h3>
        <button
          className='cart-footer__btn-checkout'
          onClick={handleButton}
          {...{disabled: cart ? false : true}}
        >
          Checkout
        </button>
      </footer>
    </article>
  )
}

export default Cart