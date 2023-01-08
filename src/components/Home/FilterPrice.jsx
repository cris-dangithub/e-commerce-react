/* ============================ IMPORTS ============================ */
//Hooks
import React, { useState } from 'react'
//React Hook Form
import { useForm } from 'react-hook-form'
//Styles
import './styles/FilterPrice.css'
/* ======================================================================== */

const FilterPrice = ({ currentFilterPrice, setCurrentFilterPrice }) => {
  const [productsFilteredByPrice, setProductsFilteredByPrice] = useState()
  const [filterShowed, setFilterShowed] = useState(true)
  const { register, handleSubmit, setValue } = useForm()

  const submit = data => {
    const validInfinity = data.to ? +data.to : Infinity
    if (+data.from <= validInfinity) {
      setCurrentFilterPrice({
        from: +data.from ? +data.from : 0,
        to: validInfinity
      });
      setProductsFilteredByPrice(true)
    } else {
      console.log("Ingresaste mal los datos del filtro");
    }
  }
  const handleDelete = () => {
    setCurrentFilterPrice({
      from: 0,
      to: Infinity
    })
    setValue('from', '0')
    setValue('to', '0')
    setProductsFilteredByPrice()
  }
  const handleShowFilter = () => {
    setFilterShowed(!filterShowed)
  }
  return (
    <section className='c-filter-price'>
      <h3 onClick={handleShowFilter} className='filter-price__title'>
        <span className='filter-price__title-text'>Price</span>
        <i
          className={`filter-price__icon fa-solid fa-chevron-down ${filterShowed ? '' : 'filter-price__icon--hidde-options'}`}>
        </i>
      </h3>
      <form className={`filter-form-price ${filterShowed ? '' : 'filter-form-price--hidde-options'}`} onSubmit={handleSubmit(submit)}>
        <div className='filter-form-price__item'>
          <label className='filter-form-price__label' htmlFor="from">From</label>
          <input className='filter-form-price__input' type="number" id='from' min='0' max='5000' {...register('from')} />
        </div>
        <div className='filter-form-price__item'>
          <label className='filter-form-price__label' htmlFor="to">To</label>
          <input className='filter-form-price__input' type="number" id='to' min='0' max='5000' {...register('to')} />
        </div>
        <section className='filter-price__info'>
          <h4 className='filter-price__count'>
            {
              productsFilteredByPrice ?
                `$${currentFilterPrice.from} - $${currentFilterPrice.to}`
                :
                ''
            }
          </h4>
          <div className='filter-price__buttons'>
            {
              productsFilteredByPrice ?
                <button className='filter-price__btn filter-price__btn--delete' onClick={handleDelete}>Delete filter</button>
                :
                <></>
            }
            <button className='filter-price__btn filter-price__btn--apply'>Apply</button>
          </div>

        </section>
      </form>
    </section>
  )
}

export default FilterPrice