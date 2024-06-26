import { Link } from "react-router-dom";

export default function homePage() {
    return (
        <div>
            <h1>Home Page</h1>
            <p>This is the home page</p>
            <div>
                <Link to="/login">Login</Link>
                <Link to="/productos">Productos</Link>
                <Link to="/producto/123">Producto 123</Link>
            </div>
        </div>
    )
}