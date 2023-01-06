import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts, getProductsByCategory } from '../../store/slices/products.slice'

const FilterCategory = ({ }) => {
  const dispatch = useDispatch()
  const [categories, setCategories] = useState()
  const [currentCategoryValue, setCurrentCategoryValue] = useState('')
  const getCategories = () => {
    const URL = `https://e-commerce-api.academlo.tech/api/v1/products/categories`
    axios.get(URL)
      .then(res => setCategories(res.data.data.categories))
      .catch(err => console.log(err))
  }
  const handleClick = (id, name = 'all products') => {
    if (name !== currentCategoryValue) {
      setCurrentCategoryValue(name)
      id !== undefined ? dispatch(getProductsByCategory(id)) : dispatch(getAllProducts())
    }
  }
  
  useEffect(() => {
    getCategories()
  }, [])
  return (
    <section>
      <h3>Category</h3>
      <ul>
        <li onClick={() => handleClick()}>All products</li>
        {
          categories?.map(category => (
            <li onClick={() => handleClick(category.id, category.name)} key={category.id}>{category.name}</li>
          ))
        }
      </ul>
    </section>
  )
}

export default FilterCategory