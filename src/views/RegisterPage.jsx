import { useState } from 'react'
import { toast } from 'react-toastify'

const RegisterPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const validarRegistro = (e) => {
        e.preventDefault()
        if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
            toast.error("todos los campos son obligatorios")
            return
        }
        if (password.length < 6) {
            toast.error("La contraseña debe tener al menos 6 caracteres")
            return
        }
        if (password !== confirmPassword) {
            toast.error("Las contraseñas no coinciden")
            return
        }
        toast.success("Registro Exitoso 🎉")
    }
    return (
        <div className='register'>
            <h2>Registro</h2>
            <form onSubmit={validarRegistro}>
                <input type="email" placeholder='Correo Electronico' value={email} onChange={(e) => (setEmail(e.target.value))} />
                <br />
                <input type="password" placeholder='Contraseña' value={password} onChange={(e) => (setPassword(e.target.value))} />
                <br />
                <input type="password" placeholder='Confirma Contraseña' value={confirmPassword} onChange={(e) => (setConfirmPassword(e.target.value))} />
                <br />
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default RegisterPage