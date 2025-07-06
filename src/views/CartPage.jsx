import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartPage = () => {
  const { cart, setCart } = useContext(CartContext)

  const increase = (id) => {
    const updated = cart.map(item =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    )
    setCart(updated)
  }

  const decrease = (id) => {
    const updated = cart
      .map(item => item.id === id ? { ...item, count: item.count - 1 } : item)
      .filter(item => item.count > 0)
    setCart(updated)
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.count, 0)

  return (
    <div className="cart">
      <h2>🛒 Detalles del pedido</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul className="cart-list">
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <img src={item.img} alt={item.name} width={70} />
              <div className="cart-info">
                <p><strong>Pizza {item.name}</strong></p>
                <p>${item.price.toLocaleString('es-CL')} x {item.count}</p>
              </div>
              <div className="cart-controls">
                <button onClick={() => decrease(item.id)}>-</button>
                <span>{item.count}</span>
                <button onClick={() => increase(item.id)}>+</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <hr />
      <h3>Total: ${total.toLocaleString('es-CL')}</h3>
      <button className="pay-btn">Pagar 🧾</button>
    </div>
  )
}

export default CartPage
