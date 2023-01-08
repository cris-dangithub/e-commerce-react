/* ============================ IMPORTS ============================ */
import React from 'react'
//Redux
import { useSelector } from 'react-redux'
//Router
import { useNavigate } from 'react-router-dom'
//Utils
import { getImgsById } from '../../utils/getImgsById'
//CSS
import './styles/CardPurchase.css'
/* ======================================================================== */

const CardPurchase = ({ purchase }) => {
  const navigate = useNavigate()
  const handleClick = (id) => {
    navigate(`/product/${id}`)
  }
  const { products } = useSelector(state => state)
  const MONTHS = [
    "January", "Febrary", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December",
  ];
  const dataPurchase = new Date(purchase.createdAt)

  return (
    <article className='c-card-purchase'>
      <header className='card-purchase__header'>
        <h3 className='card-purchase__data'>
          {`${MONTHS[dataPurchase.getMonth()]} ${dataPurchase.getDate()}, ${dataPurchase.getFullYear()} 
          (${dataPurchase.getHours()}:${dataPurchase.getMinutes()})`}
        </h3>
      </header>
      <ul className='card-purchase__list'>
        {
          purchase.cart.products.map(product => (
            <li className='card-purchase__item' key={product.id} onClick={() => handleClick(product.id)}>
              <img
                className='card-purchase__img'
                src=
                {
                  getImgsById(products, product)?.productImgs[0]
                }
                alt="" />
              <h3 className='card-purchase__product-name'>{product.title}</h3>
              <span className='card-purchase__quantity'>{product.productsInCart.quantity}</span>
              <span className='card-purchase__price'>$ {product.price}</span>
            </li>
          ))
        }
      </ul>
    </article>
  )
}

export default CardPurchase