// import { pizzas } from '../data/pizzas'
import { useContext, useEffect, useState } from "react"
import Header from "../components/Header"
import { CartContext } from "../context/CartContext"
import CardPizza from "../components/CardPizza"
import { toast } from 'react-toastify'

const HomePage = () => {
  const [pizzas, setPizzas] = useState([])
  const { cart, setCart } = useContext(CartContext)

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

  const addToCart = (pizza) => {
    const exists = cart.find(item => item.id === pizza.id)
    if (exists) {
      setCart(cart.map(item =>
        item.id === pizza.id ? { ...item, count: item.count + 1 } : item
      ));
    } else {
      setCart([...cart, { ...pizza, count: 1 }])
    }
    toast.success(`🍕 ${pizza.name} añadida al carrito`)
  }

  return (
    <>
      <Header />
      <div className="pizza-grid">
        {pizzas.map((pizza) => (
          <div key={pizza.id} className="pizza-card">
            <CardPizza
              id={pizza.id}
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
              onAdd={() => addToCart(pizza)}
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default HomePage