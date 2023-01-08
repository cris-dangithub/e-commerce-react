/* ============================ IMPORTS ============================ */
//Hooks
import React, { useEffect } from 'react'
//Redux
import { useDispatch, useSelector } from 'react-redux'
import { marginActive } from '../store/slices/marginBottomRoute.slice';
import { getAllProducts } from '../store/slices/products.slice';
import { getPurchases } from '../store/slices/purchases.slice';
//Components
import CardPurchase from '../components/Purchases/CardPurchase';
//CSS
import './styles/Purchases.css'
/* ======================================================================== */
const Purchases = () => {
  const { purchases } = useSelector(state => state)
  const dispatch = useDispatch()
  const reversePurchases = purchases && [...purchases]
  useEffect(() => {
    dispatch(getPurchases())
    dispatch(getAllProducts())
    dispatch(marginActive())
  }, [])
  return (
    <article className='c-purchases'>
      <div className='purchases__cards-container'>
        <h2 className='purchases__title'>My purchases</h2>
        {
          reversePurchases?.reverse().map(purchase => (
            <CardPurchase
              key={purchase.id}
              purchase={purchase}
            />
          ))
        }
      </div>
    </article>
  )
}

export default Purchases