import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardProduct from '../components/Home/CardProduct'
import FilterCategory from '../components/Home/FilterCategory'
import FilterPrice from '../components/Home/FilterPrice'
import OrderProducts from '../components/Home/OrderProducts'
import { getUserCart } from '../store/slices/cart.slice'
import { getPurchases } from '../store/slices/purchases.slice'

const Home = () => {

  const { products } = useSelector(state => state)
  const dispatch = useDispatch()
  const [currentInputValue, setCurrentInputValue] = useState('')
  const [currentFilterPrice, setCurrentFilterPrice] = useState({
    from: 0,
    to: Infinity
  })
  const [filterProducts, setFilterProducts] = useState()
  const handleChange = e => {
    const inputValue = e.target.value.toLowerCase().trim()
    setCurrentInputValue(inputValue)
    setFilterProducts(products?.filter(product => product.title.toLowerCase().includes(inputValue)))
  }
  const handleInputClick = () => {
    setCurrentInputValue('')
    setFilterProducts([...products])
  }


  useEffect(() => {
    products && !currentInputValue ?
      setFilterProducts([...products])
      :
      setFilterProducts(products?.filter(product => product.title.toLowerCase().includes(currentInputValue)))
  }, [products])


  return (
    <div>
      <section>
        <FilterPrice
          currentFilterPrice={currentFilterPrice}
          setCurrentFilterPrice={setCurrentFilterPrice}
        />
        <FilterCategory />
        <OrderProducts />
      </section>
      <div>
        <input value={currentInputValue}
          onChange={handleChange}
          type="text"
          id='input'
          placeholder='What are you looking for?'
        />
        <button
          onClick={handleInputClick}
          {...{ disabled: currentInputValue ? false : true }}
        >
          <i className="fa-solid fa-circle-xmark"></i>
        </button>

      </div>

      <div className="products-container">
        {
          filterProducts?.filter(filterProduct => {
            const condition1 = +filterProduct.price >= currentFilterPrice.from
            const condition2 = +filterProduct.price <= currentFilterPrice.to
            return condition1 && condition2
          }).length !== 0
            ?
            filterProducts?.filter(filterProduct => {
              const condition1 = +filterProduct.price >= currentFilterPrice.from
              const condition2 = +filterProduct.price <= currentFilterPrice.to
              return condition1 && condition2
            }).map(product => (
              <CardProduct
                key={product.id}
                product={product}
              />
            ))
            :
            <h2>Not exist products to this filter</h2>
        }
      </div>
    </div>
  )
}

export default Home