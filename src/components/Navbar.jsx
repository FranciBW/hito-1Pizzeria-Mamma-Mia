import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const Navbar = () => {
  const { cart } = useContext(CartContext)
  const total = cart.reduce((sum, item) => sum + item.price * item.count, 0)
  const token = false
  return (
    <nav className="navbar navbar-expand-lg px-3">
      <Link className="navbar-brand me-3" to="/">Pizzería Mamma Mia!</Link>

      <div className="d-flex">
        <Link to="/" className="btn btn-dark-custom me-2">
          <i className="bi bi-house-fill"></i> 🍕Home
        </Link>
      </div>

      {token ? (
        <Link to="/profile" className="btn btn-dark-custom me-2">
          <i className="bi bi-box-arrow-in-right"></i> 👤Profile
        </Link>
      ) : (
        <Link to="/login" className="btn btn-dark-custom me-2">
          <i className="bi bi-box-arrow-in-right"></i> 🔐Login
        </Link>
      )}

      {token ? (
        <button className="btn btn-dark-custom me-2">
          <i className="bi bi-pencil-square"></i> 🚪Logout
        </button>
      ) : (
        <Link to="/register" className="btn btn-dark-custom me-2">
          <i className="bi bi-pencil-square"></i> 📝Register
        </Link>
      )}

      <div className="ms-auto">
        <Link to="/cart" className="btn btn-cart">
          <i className="bi bi-cart-fill"></i> 🛒Total: ${total.toLocaleString("es-CL")}
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
