/* ============================ IMPORTS ============================ */
//Hooks
import React, { useState } from 'react'
//CSS
import './styles/Slider.css'
/* ======================================================================== */

const Slider = ({ product }) => {
  const [currentImgIdx, setCurrentImgIdx] = useState(0)
  const handleBtnPrevious = () => {
    currentImgIdx === 0 ?
      setCurrentImgIdx(product?.productImgs.length - 1)
      :
      setCurrentImgIdx(currentImgIdx - 1)
  }

  const handleBtnNext = () => {
    currentImgIdx === product?.productImgs.length - 1 ?
      setCurrentImgIdx(0)
      :
      setCurrentImgIdx(currentImgIdx + 1)
  }
  const handleImgClick = idx => {
    if (currentImgIdx !== idx) setCurrentImgIdx(idx)
  }


  const objSliderHeader = {
    width: `calc(var(--width-slider) * ${product?.productImgs.length})`
  }
  const objMainImgs = {
    transform: `translateX(calc((-100% / 3) * ${currentImgIdx}))`
  }

  return (
    <article className='c-slider' >
      <header className='slider__header' style={objSliderHeader}>
        <ul className='slider__main-imgs-container' style={objMainImgs}>
          {
            product?.productImgs.map((img, idx) => (
              <li key={idx} className='slider__main-img-item'>
                <img className='slider__main-img' src={img} alt="" />
              </li>
            ))
          }
        </ul>
        <div className='slider__btns-container'>
          <button className='slider__btn' onClick={handleBtnPrevious}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button className='slider__btn' onClick={handleBtnNext}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </header>
      <footer className='slider__footer'>
        <ul className='slider__pages-imgs-container'>
          {
            product?.productImgs.map((img, idx) => (
              <li key={idx} className='slider__pages-item'>
                <img
                  className={
                    `slider__pages-img ${currentImgIdx === idx ? 'slider__pages-img--active' : 'slider__pages-img--inactive'}`}
                  src={img} alt=""
                  onClick={() => handleImgClick(idx)}
                />
              </li>
            ))
          }
        </ul>
      </footer>
    </article>
  )
}

export default Slider