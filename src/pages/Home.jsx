/* ============================ IMPORTS ============================ */
//Hooks
import React, { useEffect, useState } from 'react'
//Redux
import { useDispatch, useSelector } from 'react-redux'
import { marginActive } from '../store/slices/marginBottomRoute.slice'
//Components
import CardProduct from '../components/Home/CardProduct'
import FilterCategory from '../components/Home/FilterCategory'
import FilterPrice from '../components/Home/FilterPrice'
import OrderProducts from '../components/Home/OrderProducts'
//CSS
import './styles/Home.css'
import { getUserCart } from '../store/slices/cart.slice'
/* ======================================================================== */

const Home = () => {
  const [menuShowed, setMenuShowed] = useState()
  const [currentCategoryId, setCurrentCategoryId] = useState()
  const [currentOrderOption, setCurrentOrderOption] = useState()
  const [currentInputValue, setCurrentInputValue] = useState('')
  const [firstBtnClicked, setFirstBtnClicked] = useState(0)
  const [currentFilterPrice, setCurrentFilterPrice] = useState({
    from: 0,
    to: Infinity
  })
  const [filterProducts, setFilterProducts] = useState()
  const { products } = useSelector(state => state)
  const dispatch = useDispatch()
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
  useEffect(() => {
    dispatch(marginActive())
  }, [])

  /*  */
  useEffect(() => {
    if (firstBtnClicked === 1) {
      dispatch(getUserCart())
    }
  }, [firstBtnClicked])

  /*  */
  return (
    <article className='c-home'>
      <section className={`filters-container ${menuShowed ? 'filters-container--showed' : ''}`}>
        <i onClick={() => setMenuShowed(false)} className="filters-container__x fa-solid fa-xmark"></i>
        <section className='filters-container__top'>
          <h2 className='filters-container__title'>Filters</h2>
          <FilterPrice
            currentFilterPrice={currentFilterPrice}
            setCurrentFilterPrice={setCurrentFilterPrice}
          />
          <FilterCategory
            setCurrentOrderOption={setCurrentOrderOption}
            setCurrentCategoryId={setCurrentCategoryId}
          />
        </section>
        <div className='filters-container__bottom'>
          <OrderProducts
            currentOrderOption={currentOrderOption}
            setCurrentOrderOption={setCurrentOrderOption}
            currentCategoryId={currentCategoryId}
          />
        </div>
      </section>
      <main className='home__main'>
        <section className='home__input-search-container'>
          <div className='home__input-top'>
            <input className='home__input-search filter-form-price__input'
              value={currentInputValue}
              onChange={handleChange}
              type="text"
              id='input'
              placeholder='What are you looking for?'
            />
            <button
              className={
                `home__input-search-delete-btn 
              ${!currentInputValue ? 'home__input-search-delete-btn--disabled' : ''}`}
              onClick={handleInputClick}
              {...{ disabled: currentInputValue ? false : true }}
            >
              <i className="fa-solid fa-circle-xmark"></i>
            </button>
          </div>
          <div className='home__input-bottom'>
            <button className='home__input-filter-btn' onClick={() => setMenuShowed(true)} >
              <i className="fa-solid fa-filter"></i>
              <span className='home__input-filter-text'>Filters</span>
            </button>
          </div>
        </section>
        <div className="home__products-container">
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
                  firstBtnClicked={firstBtnClicked}
                  setFirstBtnClicked={setFirstBtnClicked}
                />
              ))
              :
              <h2 className='home__products-not-found'>
                Not exist products to this filter
              </h2>
          }
        </div>
      </main>
    </article>
  )
}

export default Home