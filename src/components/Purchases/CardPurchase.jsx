import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getImgsById } from '../../utils/getImgsById'

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
    <article>
      <header>
        <h3>
          {`${MONTHS[dataPurchase.getMonth()]} ${dataPurchase.getDate()}, ${dataPurchase.getFullYear()} 
          (${dataPurchase.getHours()}:${dataPurchase.getMinutes()})`}
        </h3>
      </header>
      <section>
        <ul>
          {
            purchase.cart.products.map(product => (
              <li key={product.id} onClick={() => handleClick(product.id)}>
                <img
                  src=
                  {
                    getImgsById(products, product).productImgs[0]
                  }
                  alt="" />
                <h3>{product.title}</h3>
                <span>{product.productsInCart.quantity}</span>
                <span>{product.price}</span>
              </li>
            ))
          }
        </ul>
      </section>
    </article>
  )
}

export default CardPurchase