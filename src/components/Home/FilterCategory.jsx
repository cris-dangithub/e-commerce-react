/* ============================ IMPORTS ============================ */
//Hooks
import React, { useEffect, useState } from 'react'
//Axios
import axios from 'axios'
//Redux
import { useDispatch } from 'react-redux'
import { getAllProducts, getProductsByCategory } from '../../store/slices/products.slice'
//CSS
import './styles/FilterCategory.css'
/* ======================================================================== */

const FilterCategory = ({ setCurrentOrderOption, setCurrentCategoryId }) => {
  const dispatch = useDispatch()
  const [filterShowed, setFilterShowed] = useState(true)
  const [categories, setCategories] = useState()
  const [currentCategoryValue, setCurrentCategoryValue] = useState('all products')
  const getCategories = () => {
    const URL = `https://e-commerce-api.academlo.tech/api/v1/products/categories`
    axios.get(URL)
      .then(res => setCategories(res.data.data.categories))
      .catch(err => console.log(err))
  }
  const handleClick = (id, name = 'all products') => {
    if (name !== currentCategoryValue) {
      setCurrentCategoryValue(name)
      if(id !== undefined) {
        dispatch(getProductsByCategory(id))
        setCurrentCategoryId(id)
      } else {
        dispatch(getAllProducts())
        setCurrentOrderOption()
        setCurrentCategoryId()
      }
    }
  }
  const handleShowFilter = () => {
    setFilterShowed(!filterShowed)
  }
  useEffect(() => {
    getCategories()
  }, [])
  return (
    <section className='c-filter-price'>
      <h3 onClick={handleShowFilter} className='filter-price__title'>
        <span>Category</span>
        <i
          className={`filter-price__icon fa-solid fa-chevron-down ${filterShowed ? '' : 'filter-price__icon--hidde-options'}`}>
        </i>
      </h3>
      <ul className={`filter-form-price filter-form-price--category ${filterShowed ? '' : 'filter-form-price--hidde-options'}`}>
        <li
          className={
            `filter-form-price__item--category
            ${currentCategoryValue === 'all products' ? 'filter-form-price__item--category--active' : 'filter-form-price__item--category--inactive'}`}
          onClick={() => handleClick()}>
          All products
        </li>
        {
          categories?.map(category => (
            <li
              className={
                `filter-form-price__item--category
                ${currentCategoryValue === category.name ? 'filter-form-price__item--category--active' : 'filter-form-price__item--category--inactive'}`}
              onClick={() => handleClick(category.id, category.name)} key={category.id}
            >
              {category.name}
            </li>
          ))
        }
      </ul>
    </section>
  )
}

export default FilterCategory