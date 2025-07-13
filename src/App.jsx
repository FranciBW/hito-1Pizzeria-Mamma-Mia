import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './views/HomePage'
import RegisterPage from './views/RegisterPage'
import LoginPage from './views/LoginPage'
import CartPage from './views/CartPage'
import PizzaPage from './views/PizzaPage'
import ProfilePage from './views/ProfilePage'
import NotFound from './views/NotFound'
import { useContext } from 'react'
import { UserContext } from './context/UserContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const {token} = useContext(UserContext)

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={!token ? <RegisterPage /> : <Navigate to="/" />} />
        <Route path="/login" element={!token ? <LoginPage /> : <Navigate to="/" />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/pizza/:id" element={<PizzaPage />} />
        <Route path="/profile" element={token ? <ProfilePage /> : <Navigate to="/login" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer position="top-center" autoClose={2000} hideProgressBar />
    </>
  )
}

export default App