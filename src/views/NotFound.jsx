import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 text-center bg-light">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <p className="fs-3">
        <span className="text-danger">¡Ups!</span> Página no encontrada.
      </p>
      <p className="lead">
        La página que estás buscando no existe o fue movida.
      </p>
      <Link to="/" className="btn btn-dark mt-3">
        <i className="bi bi-arrow-left-circle-fill"></i> Volver al inicio
      </Link>
    </div>
  )
}

export default NotFound