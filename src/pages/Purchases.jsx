import React from 'react'
import { useSelector } from 'react-redux'
import CardPurchase from '../components/Purchases/CardPurchase';

const Purchases = () => {
  const { purchases } = useSelector(state => state) 
  const reversePurchases = purchases && [...purchases]
  console.log(reversePurchases?.reverse());
  return (
    <article>
      <h2>My purchases</h2>
      <div>
        {
          reversePurchases?.map(purchase => (
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