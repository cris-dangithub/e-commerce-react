/* ============================ IMPORTS ============================ */
//Hooks
import { useEffect, useState } from 'react'
//React Redux
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from './store/slices/products.slice'
//React Route
import { Route, Routes } from 'react-router-dom'
//Components
import ProtectedRoutes from './components/ProtectedRoutes'
import ProtectSignUp from './components/ProtectSignUp'
import Footer from './components/shared/Footer'
import Navbar from './components/shared/Navbar'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Login from './pages/Login'
import ProductInfo from './pages/ProductInfo'
import Purchases from './pages/Purchases'
import SignUp from './pages/SignUp'
import User from './pages/User'
//CSS
import './App.css'
/* ======================================================================== */

function App() {
  const { products, marginBottomRoute } = useSelector(state => state)
  const dispatch = useDispatch()
  const [allProductsQuantity, setAllProductsQuantity] = useState()
  useEffect(() => {
    dispatch(getAllProducts())
  }, [])
  useEffect(() => {
    if (!allProductsQuantity && products) setAllProductsQuantity(products.length)
  }, [products])

  return (
    <div className="App">
      <Navbar />
      <main className='App__routes-container' style={{marginBottom: marginBottomRoute ? 'auto' : '0'}}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route element={<ProtectSignUp />} >
            <Route path='/signup' element={<SignUp />} />
          </Route>
          <Route element={<ProtectedRoutes />}>
            <Route path='/user' element={<User />} />
            <Route path='/purchases' element={<Purchases />} />
            <Route path='/cart' element={<Cart allProductsQuantity={allProductsQuantity} />} />
          </Route>
          <Route path='/product/:id' element={<ProductInfo />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
