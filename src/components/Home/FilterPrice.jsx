import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

const FilterPrice = ({ currentFilterPrice, setCurrentFilterPrice }) => {
  const dataToResetForm = {
    from: '',
    to: ''
  }
  const [productsFilteredByPrice, setProductsFilteredByPrice] = useState()

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
  return (
    <section>
      <h3>Price</h3>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <label htmlFor="from">From</label>
          <input type="number" id='from' min='0' {...register('from')} />
        </div>
        <div>
          <label htmlFor="to">To</label>
          <input type="number" id='to' min='0' {...register('to')} />
        </div>
        <section>
          <h4>
            {
              productsFilteredByPrice ?
                `$${currentFilterPrice.from} - $${currentFilterPrice.to}`
                :
                ''
            }
          </h4>
        </section>
        <div>
          {
            productsFilteredByPrice ?
              <button onClick={handleDelete}>Delete filter</button>
              :
              <></>
          }
          <button>Apply</button>
        </div>
      </form>
    </section>
  )
}

export default FilterPrice