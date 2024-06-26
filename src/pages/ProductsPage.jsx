import { useEffect, useState } from "react"
import { getProducts } from "../api"
import { toast } from "sonner"
import { Link, Navigate } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function ProductsPage() {
    

    /**
     * 1- Al terminar de renderizar el componente
     * 2- Al cambiar alguna de sus dependencias
     * 
     * Recibe 2 parametros:
     * 1. Una función a ejecutar
     * 2. Un arreglo de sus dependencias
     * 
     */

    //Se ejecuta al terminar de renderizar el componente
    //useEffect(() => {
   //     console.log("Terminó de renderizar")
   // },[])

   // useEffect(() => {
   //     console.log("Use effect count ", count)
   // },[count])

   // useEffect(() => {
   //     console.log("Sin dependencias")
   // })

    /**
     * Ejemplo de un loop infinito
     * 
     *useEffect(() => {
        setCount(count+1)
        console.log("Se cicló!!!")
    },[count])
     */

    const [products, setProducts] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')

        if(!token){
            toast.error('Debes iniciar sesión para ver los productos')
            navigate('/login')
            return
        }

        getProducts()
            .then((prods) => {
                setProducts(prods)
            })
            .catch(error => {
                toast.error("Error al obtener los productos")
                console.error("[get products error]", error)
            })
    })

    return (
        <>
            <main className="p-4">
                <h1 className="text-4xl font-semibold text-center">Productos</h1>
                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
                    {
                        products.map((product, idx) => {
                            return (
                                <>
                                    <article key={`prod-${idx}`} 
                                        className="hover:bg-white/10 cursor-pointer rounded p-4 flex flex-col"
                                    >
                                        <img src={product.thumbnail} alt={product.title} />
                                        <p className="text-center">{product.title}</p>
                                        < Link to = {`/producto/${product.id}`}
                                        className="bg-white/50 w-full p-2 rounded text-center">
                                            Ver detalle
                                        </Link>
                                    </article>
                                </>
                            )
                        })
                    }
                </section>
            </main>
        </>
    )
}