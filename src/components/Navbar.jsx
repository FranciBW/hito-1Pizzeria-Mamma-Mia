import React from 'react'

const Navbar = () => {
  const total = 25000;
  const token = false;
  return (
    <nav className="navbar navbar-expand-lg px-3">
      <a className="navbar-brand me-3" href="#">Pizzería Mamma Mia!</a>
      <div className="d-flex">
        <a href="#" className="btn btn-dark-custom me-2">
          <i className="bi bi-house-fill"></i> 🍕Home
        </a>
      </div>
      {token ? (<a href="#" className="btn btn-dark-custom me-2">
        <i className="bi bi-box-arrow-in-right"></i> 👤Profile
      </a>) : (<a href="#" className="btn btn-dark-custom me-2">
        <i className="bi bi-box-arrow-in-right"></i> 🔐Login
      </a>)}
      {token ? (<a href="#" className="btn btn-dark-custom me-2">
        <i className="bi bi-pencil-square"></i> 🚪Logout
      </a>) : (<a href="#" className="btn btn-dark-custom me-2">
        <i className="bi bi-pencil-square"></i> 📝Register
      </a>)}
      <div className="ms-auto">
        <a href="#" className="btn btn-cart">
          <i className="bi bi-cart-fill"></i> 🛒Total:${total.toLocaleString("es-CL")}
        </a>
      </div>
    </nav>
  )
}

export default Navbar
