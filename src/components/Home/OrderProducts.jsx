import React from 'react'
import { useDispatch } from 'react-redux'
import { ascendingOrderProducts, descendingOrderProducts } from '../../store/slices/products.slice'

const OrderProducts = () => {
  const dispatch = useDispatch()
  const handleAscending = () => {
    dispatch(ascendingOrderProducts())
  }
  const handleDescending = () => {
    dispatch(descendingOrderProducts())

  }
  return (
    <section>
      <button onClick={handleAscending}>Ascending order</button>
      <button onClick={handleDescending}>Descending order</button>
    </section>
  )
}

export default OrderProducts