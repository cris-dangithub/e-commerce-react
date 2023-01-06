import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const usePetitions = () => {
  const navigate = useNavigate()
  const getProductById = (id, setProduct) => {
    const URL = `https://e-commerce-api.academlo.tech/api/v1/products/${id}`
    axios.get(URL)
      .then(res => setProduct(res.data.data.product))
      .catch(err => console.log(err))
  }
  const loginUser = (data, reset, objReset) => {
    const URL = `https://e-commerce-api.academlo.tech/api/v1/users/login`
    axios.post(URL, data)
      .then(res => {
        reset(objReset)
        localStorage.setItem('token', res.data.data.token)
        localStorage.setItem('user', JSON.stringify(res.data.data.user));
        navigate('/')
        console.log(res)
      })
      .catch(err => console.log(err))
  }

  return {
    getProductById,
    loginUser
  }
}

export default usePetitions