import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import ProtectedRoutes from './components/ProtectedRoutes'
import Footer from './components/shared/Footer'
import Navbar from './components/shared/Navbar'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Login from './pages/Login'
import ProductInfo from './pages/ProductInfo'
import Purchases from './pages/Purchases'
import User from './pages/User'
import { getUserCart } from './store/slices/cart.slice'
import { getAllProducts } from './store/slices/products.slice'
import { getPurchases } from './store/slices/purchases.slice'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])


  //Creación de nuevo usuario
  /* 
  useEffect(() => {
    const URL = `https://e-commerce-api.academlo.tech/api/v1/users`
    const data = {
      firstName: "Cristian",
      lastName: "Muñoz",
      email: "cristiandaniel@gmail.com",
      password: "cristian123",
      phone: "3112499796",
      role: "admin"
    }
    axios.post(URL, data)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }, []) 
  */
  // Get cart and purchases

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/user' element={<User />} />
          <Route path='/purchases' element={<Purchases />} />
          <Route path='/cart' element={<Cart />} />
        </Route>
        <Route path='/product/:id' element={<ProductInfo />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
