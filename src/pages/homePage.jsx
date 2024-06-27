import { Link } from "react-router-dom";

export default function homePage() {
    return (
        <div>
            <h1 className="text-center p-10 font-bold text-xl">Bienvenido a Mercado Falso! Somos más falsos que las promesas de tu ex 😁</h1>
            <div className="flex justify-center items-center w-full flex-col gap-4 min-h-dvh">
                <section className="flex flex-col gap-4 rounded-md items-center bg-white/50 max-w-sm w-full">
                    <Link className="hover:text-red-800 font-semibold" to="/login">Iniciar Sesión</Link>
                    <Link className="hover:text-red-800 font-semibold" to="/productos">Ve los productos</Link>

                </section>
            </div>
        </div>
    )
}