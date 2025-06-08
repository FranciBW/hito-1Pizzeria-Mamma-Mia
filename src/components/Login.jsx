import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const validarInicio = (e) => {
        e.preventDefault()
        if (!email.trim()|| !password.trim() ) {
            alert("todos los campos son obligatorios")
            return
        }
        if (password.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres")
            return 
        }
        alert("Inicio de sesion exitoso 🎉")
    }
  return (
    <div className='login'>
            <h2>Login</h2>
            <form onSubmit={validarInicio}>
                <input type="email" placeholder='Correo Electronico' value={email} onChange={(e) => (setEmail(e.target.value))} />
                <br />
                <input type="password" placeholder='Contraseña' value={password} onChange={(e) => (setPassword(e.target.value))} />
                <br />
                <button type="submit">Enviar</button>
            </form>
        </div>
  )
}

export default Login