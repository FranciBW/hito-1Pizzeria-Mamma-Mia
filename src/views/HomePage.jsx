// import CardPizza from './CardPizza'
// import { pizzas } from '../data/pizzas'
import { useEffect, useState } from "react"
import Header from "../components/Header"

const HomePage = () => {
  const [pizzas, setPizzas] = useState([])

  useEffect(() => {
    const fetchPizzas = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/pizzas")
        const data = await res.json()
        setPizzas(data)
      } catch (error) {
        console.error("Error al cargar las pizzas:", error)
      }
    }

    fetchPizzas()
  }, [])
  return (
    <>
      <Header />
      <div className="pizza-grid">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="pizza-card">
            <img src={pizza.img} alt={pizza.name} style={{ maxWidth: "200px" }} />
            <h3>{pizza.name}</h3>
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
        ))}
      </div>
    </>
  )
}

export default HomePage