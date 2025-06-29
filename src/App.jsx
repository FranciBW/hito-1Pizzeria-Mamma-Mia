import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import HomePage from './views/HomePage'
import RegisterPage from './views/RegisterPage'
import LoginPage from './views/LoginPage'
import CartPage from './views/CartPage'
import PizzaPage from './views/PizzaPage'
import ProfilePage from './views/ProfilePage'
import NotFound from './views/NotFound'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/pizza/p001" element={<PizzaPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
