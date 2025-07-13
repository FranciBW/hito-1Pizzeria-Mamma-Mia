import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

const PizzaPage = () => {
  const {id} = useParams()
  const [pizza, setPizza] = useState(null)

  useEffect(() => {
    const getPizza = async () => {
      const res = await fetch(`http://localhost:5000/api/pizzas/${id}`)
      const data = await res.json()
      setPizza(data)
    }

    getPizza()
  }, [id])

  if (!pizza) return <p>Cargando pizza...</p>

  return (
    <div className="pizza-detail">
      <img src={pizza.img} alt={pizza.name} />
      <h1>{pizza.name}</h1>
      <p>{pizza.desc}</p>
      <hr />
      <ul>
        {pizza.ingredients.map((ing, idx) => (
          <li key={idx}>🍕{ing}</li>
        ))}
      </ul>
      <p><strong>${pizza.price.toLocaleString("es-CL")}</strong></p>
      <div className="card-buttons">
        <Link to="/" className="btn btn mt-3">Volver al inicio</Link>
      </div>
    </div>
  )
}

export default PizzaPage