import { useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import { getProduct } from "../api"

export default function ProductDetailPage() {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(!token){
            toast.error('Debes iniciar sesión para ver los productos')
            navigate('/login')
            return
        }

        getProduct(id)
        .then((prod) => {
            setProduct(prod)
        })
        .catch(error => {
            toast.error("Error al obtener el producto")
            console.error("[get product error]", error)
        })

    },[id])


    return (
        <>
            <main className="flex justify-center items-center min-h-dvh">
                <section 
                    className="flex justify-center items-center flex-col gap-2 rounded-2xl max-w-sm w-full p-4 bg-white/50 "
                >
                    <img src={product.thumbnail} alt="" />
                    <h1 className="text-2xl font-bold">{product.title} </h1>
                    <span className="text-center">{product.description} </span>
                    <section className="flex gap-5">
                        <span>⭐ {product.rating}</span>
                        <span className="font-semibold">${product.price} </span>
                    </section>
                    <a href="#" className="bg-blue-500 p-1 min-w-full text-center rounded-xl">Comprar</a>
                </section>
            </main>
        </>
    )
}