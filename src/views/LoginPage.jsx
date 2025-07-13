import React, { useState } from 'react'
import { toast } from 'react-toastify'

const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const validarInicio = (e) => {
        e.preventDefault()
        if (!email.trim()|| !password.trim() ) {
            toast.error("todos los campos son obligatorios")
            return
        }
        if (password.length < 6) {
            toast.error("La contraseña debe tener al menos 6 caracteres")
            return 
        }
        toast.success("Inicio de sesion exitoso 🎉")
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

export default LoginPage