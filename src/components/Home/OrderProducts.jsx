/* ============================ IMPORTS ============================ */
//Redux
import { useDispatch } from 'react-redux'
import {
  ascendingOrderProducts,
  descendingOrderProducts,
  getAllProducts,
  getProductsByCategory
} from '../../store/slices/products.slice'
//CSS
import './styles/OrderProducts.css'
/* ======================================================================== */

const OrderProducts = ({ currentOrderOption, setCurrentOrderOption, currentCategoryId }) => {
  const dispatch = useDispatch()
  const handleAscending = () => {
    dispatch(ascendingOrderProducts())
    setCurrentOrderOption('ascending')
  }
  const handleDescending = () => {
    dispatch(descendingOrderProducts())
    setCurrentOrderOption('descending')
  }
  const handleDefault = () => {
    if (currentCategoryId) {
      dispatch(getProductsByCategory(currentCategoryId))
    } else {
      dispatch(getAllProducts())
    }
    setCurrentOrderOption()
  }

  return (
    <section className='c-order-products'>
      <button
        className={
          `filter-price__btn filter-price__btn--order 
          filter-price__btn--order--${currentOrderOption && currentOrderOption === 'ascending' ? 'active' : 'inactive'}`}
        onClick={handleAscending}
        {...{ disabled: currentOrderOption === 'ascending' ? true: false }}

      >
        Ascending order
      </button>
      <button
        className={
          `filter-price__btn filter-price__btn--order 
          filter-price__btn--order--${currentOrderOption && currentOrderOption === 'descending' ? 'active' : 'inactive'}`}
        onClick={handleDescending}
        {...{ disabled: currentOrderOption === 'descending' ? true: false }}

      >
        Descending order
      </button>
      <button
        className={
          `filter-price__btn filter-price__btn--order 
          filter-price__btn--order--${currentOrderOption ? 'active-default' : 'inactive'}`}
        onClick={handleDefault}
        {...{ disabled: currentOrderOption ? false : true }}
      >
        Default
      </button>
    </section>
  )
}

export default OrderProducts