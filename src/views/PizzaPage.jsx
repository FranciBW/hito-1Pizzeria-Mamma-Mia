import { useEffect, useState } from "react"

const PizzaPage = () => {
  const [pizza, setPizza] = useState("")

  useEffect(() => {
    const getPizza = async () => {
      const res = await fetch("http://localhost:5000/api/pizzas/p001")
      const data = await res.json()
      setPizza(data)
    }

    getPizza()
  }, [])

  if (!pizza) return

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
        <a href="#">Ver Más 👀</a>
        <button>Añadir 🛒</button>
      </div>
    </div>
  )
}

export default PizzaPage