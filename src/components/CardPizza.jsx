import React from 'react'

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <div className="card-pizza">
      <img src={img} alt={`Pizza ${name}`} />
      <div className="card-body">
        <h5 className="card-title">Pizza {name}</h5>
        <hr />
        <div className="card-ingredients">
          <p>Ingredientes:</p>
          <i className="bi bi-pizza-slice"></i> {ingredients.join(", ")}
        </div>
        <hr />
        <div className="card-price">Precio: ${price.toLocaleString("es-CL")}</div>
        <div className="card-buttons">
          <a href="#">Ver Más 👀</a>
          <button>
            Añadir 🛒
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardPizza