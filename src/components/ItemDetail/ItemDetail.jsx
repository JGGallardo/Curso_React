import { Link, useParams } from "react-router-dom";
import "./ItemDetail.css";
import { useEffect, useState } from "react";
import getProducts from "../../services/mockService";
import Loader from "../Loader/Loader";
import Contador from "../Contador/Contador";

function ItemDetail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [producto, setProducto] = useState({});

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
                <p className="card-description">{producto.text || producto.descripcion}</p>
                {producto.ingredientes && (
                    <ul>
                        Ingredientes:
                        {producto.ingredientes.map((ing, idx) => (
                            <li key={idx}>{ing}</li>
                        ))}
                    </ul>
                )}
                {producto.stock !== undefined && (
                    <p className="card-description">Quedan {producto.stock} unidades en stock!</p>
                )}
                <p className="card-description">Categoría: {producto.categoria}</p>
                <div>
                    <p className="card-price">$ {producto.precio}</p>
                </div>
                <Link to="/">
                    <button className="card-button">Volver al inicio</button>
                </Link>
                <Contador />
                <button className="card-button">Agregar al carrito</button>
            </div>
        </div>
    ) : (
        <p>Producto no encontrado.</p>
    );
}

export default ItemDetail;
