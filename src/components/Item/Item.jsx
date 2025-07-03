import { Link } from "react-router-dom";
import "./Item.css";
import Contador from "../Contador/Contador";
import { useAppContext } from "../../context/context";

function Item({ id, precio, nombre, imagen }) {
    const { agregarAlCarrito } = useAppContext();

    return (
        <div className="card">
            <div className="card-image-container">
                <img src={imagen} className="card-image" width="150" height="150" alt={nombre} />
            </div>
            <div className="card-content">
                <h3 className="card-title">{nombre}</h3>
                <div>
                    <p className="card-price">$ {precio}</p>
                </div>
                <Link to={`/detalle/${id}`}>
                    <button className="card-button">Ver detalle</button>
                </Link>
                <button
                    className="card-button"
                    onClick={() => agregarAlCarrito({ id, precio, nombre, imagen, cantidad: 1 })}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
}

export default Item;
