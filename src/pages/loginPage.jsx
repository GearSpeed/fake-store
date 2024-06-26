import {useForm} from "react-hook-form"
import {login} from "../api"
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import clsx from 'clsx'

export default function loginPage(){
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    const {
        handleSubmit,
        register,
        formState:{errors},
        setError,
    } = useForm();

    async function onSubmit(data){
        try {
            const token = await login(data.username, data.password)
            if(token){
                window.localStorage.setItem('token', token)
                toast.success("Bievenido")
                navigate('/productos')
            } else {
                toast.error("Usuario o contraseña incorrectos")
                setError('root.credentials', {
                    type: "manual", 
                    message: "Credenciales inválidas"
                })
            }
        } catch (error) {
            toast.error("Error al iniciar sesión")
        }
    }

    function handleShoPassword(){
        setShowPassword(!showPassword)
    }

    return (
        <main className="flex justify-center items-center w-full flex-col gap-4 min-h-dvh">
            <h1 className="text-4xl font-bold text-center">Login</h1>
            <form onSubmit={handleSubmit(onSubmit)} className={
                clsx(
                    "border border-white/50 rounded p-4 flex flex-col gap-4 max-w-sm w-full",{
                    "border-red-500": errors.root?.credentials
                })
            }>
                <input placeholder="Nombre de Usuario" className="text-black border border-white/50 rounded p-2" type="text" {... register('username', {
                    required: {value: true, message:'Nobre de usuario requerido'},
                })}/>
                <input placeholder="Contraseña" className=" text-black border border-white/50 rounded p-2" 
                type={showPassword ? "text" : "password"} 
                {... register('password',{
                    required: {
                        value: true, 
                        message:'Contraseña Requerida',
                    }
                    })} />

                <span 
                    className="text-xs text-white/50 cursor-pointer hover:text-white"
                    onClick={handleShoPassword}
                >
                    { showPassword ? '🙈 Ocultar' : '🙉 Mostrar'} password
                </span>
                <button className="bg-teal-500 p-4 text-black hover:bg-teal-300">Ingresar</button>
                {errors.root?.credentials && (
                    <p className="text-red-500 text-center">Credenciales inválidas</p>
                )}
            </form>
        </main>
    )
}