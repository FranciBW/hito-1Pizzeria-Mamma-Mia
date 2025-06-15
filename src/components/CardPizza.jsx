import React from 'react'

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card-pizza">
      <img src={img} alt={`Pizza ${name}`} />
      <div className="card-body">
        <h5 className="card-title">Pizza {name.charAt(0).toUpperCase() + name.slice(1)}</h5>
        <hr />
        <div className="card-ingredients">
          <p><strong>Ingredientes:</strong></p>
          <ul>
            {ingredients.map((ing, index) => (
              <li key={index}>🍕 {ing} <hr /></li>
            ))}
          </ul>
        </div>
        <div className="card-price">Precio: ${price.toLocaleString("es-CL")}</div>
        <div className="card-buttons">
          <a href="#">Ver Más 👀</a>
          <button>Añadir 🛒</button>
        </div>
      </div>
    </div>
  )
}

export default CardPizza