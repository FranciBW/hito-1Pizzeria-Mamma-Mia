import React from 'react'
import { Link } from 'react-router-dom'

const CardPizza = ({ id, name, price, ingredients, img, onAdd }) => {
  return (
    <div className="card-pizza">
      <img src={img} alt={`Pizza ${name}`} />
      <div className="card-body">
        <h5 className="card-title">
          Pizza {name.charAt(0).toUpperCase() + name.slice(1)}
        </h5>
        <hr />
        <div className="card-ingredients">
          <p><strong>Ingredientes:</strong></p>
          <ul>
            {ingredients.map((ing, index) => (
              <li key={index}>🍕 {ing}</li>
            ))}
          </ul>
        </div>
        <div className="card-price">
          Precio: ${price.toLocaleString("es-CL")}
        </div>
        <div className="card-buttons">
          <Link to={`/pizza/${id}`}>Ver Más 👀</Link>
          <button onClick={onAdd}>Añadir 🛒</button>
        </div>
      </div>
    </div>
  )
}

export default CardPizza