import { Link, useParams } from "react-router-dom";
import "./ItemDetail.css";
import { useEffect, useState } from "react";
import getProducts from "../../services/mockService";
import Loader from "../Loader/Loader";
import Contador from "../Contador/Contador";
import { useAppContext } from "../../context/context";

function ItemDetail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [producto, setProducto] = useState({});

    const { agregarAlCarrito } = useAppContext();

    const [cantidad, setCantidad] = useState(1);

    function restarCantidad() {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    }

    function sumarCantidad() {
        if (cantidad < 10) {
            setCantidad(cantidad + 1);
        }
    }

    function agregarCantidadAlCarrito() {
        const { id, precio, nombre, imagen } = producto;
        agregarAlCarrito({ id, precio, nombre, imagen, cantidad });
        setCantidad(1);
    }

    useEffect(() => {
        getProducts()
            .then((result) => {
                const product = result.find((el) => el.id === id);
                setProducto(product);
                setLoading(false);
            })
            .catch((err) => {
                alert(err);
            });
    }, [id]);

    return loading ? (
        <Loader />
    ) : producto ? (
        <div className="card">
            <div>
                <img
                    src={producto.imagen}
                    className="card-image detailImage"
                    width="150"
                    height="150"
                    alt={producto.nombre}
                />
            </div>
            <div className="card-content">
                <h3 className="card-title">{producto.nombre}</h3>
                {producto.ingredientes && (
                    <ul>
                        Ingredientes:
                        {producto.ingredientes.map((ing, idx) => (
                            <li key={idx}>{ing}</li>
                        ))}
                    </ul>
                )}
                <p className="card-description">Categoría: {producto.categoria}</p>
                <div>
                    <p className="card-price">$ {producto.precio}</p>
                </div>
                <Link to="/">
                    <button className="card-button">Volver al inicio</button>
                </Link>
                <Contador
                    cantidad={cantidad}
                    sumarCantidad={sumarCantidad}
                    restarCantidad={restarCantidad}
                />
                <button className="card-button" onClick={agregarCantidadAlCarrito}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    ) : (
        <p>Producto no encontrado.</p>
    );
}

export default ItemDetail;
