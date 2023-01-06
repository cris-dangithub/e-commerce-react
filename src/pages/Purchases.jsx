import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardPurchase from '../components/Purchases/CardPurchase';
import { getPurchases } from '../store/slices/purchases.slice';

const Purchases = () => {
  const { purchases } = useSelector(state => state) 
  const dispatch = useDispatch()
  const reversePurchases = purchases && [...purchases]
  useEffect(() => {
    dispatch(getPurchases())
  }, [])
  return (
    <article>
      <h2>My purchases</h2>
      <div>
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