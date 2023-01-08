/* ============================ IMPORTS ============================ */
//Hooks
import { useEffect, useState } from 'react'
//Router
import { Link } from 'react-router-dom'
//CSS
import './styles/Navbar.css'
/* ======================================================================== */

const Navbar = () => {
  const [navBgActive, setNavBgActive] = useState()
  const changeNavBg = (body) => {
    body.getBoundingClientRect().top >= -20 ? setNavBgActive(false) : setNavBgActive(true)
  }
  
  useEffect(() => {
    const body = document.querySelector('body')
    window.addEventListener('scroll', () => {
      changeNavBg(body)
    })
    window.addEventListener('load', () => {
      changeNavBg(body)
    })
  }, [])
  return (
    <nav className={`c-navbar ${navBgActive ? 'c-navbar--background-visible' : ''}`}>
      <Link className='navbar__icon-ecommerce' to='/'>
        E-commerce
      </Link>
      <ul className='navbar__list'>
        <li className={`navbar__item ${navBgActive ? 'navbar__item--color-bgActive' : ''}`}>
          <Link className='navbar__link' to='/user'>
            <i className="fa-regular fa-user"></i>
          </Link>
        </li>
        <li className={`navbar__item ${navBgActive ? 'navbar__item--color-bgActive' : ''}`}>
          <Link className='navbar__link' to='/purchases'>
            <i className="fa-solid fa-cash-register"></i>
          </Link>
        </li>
        <li className={`navbar__item ${navBgActive ? 'navbar__item--color-bgActive' : ''}`}>
          <Link className='navbar__link' to='/cart'>
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar