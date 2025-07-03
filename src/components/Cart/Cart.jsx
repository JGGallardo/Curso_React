import { useAppContext } from "../../context/context";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Cart.css";
import Contador from "../Contador/Contador";
import FormularioCliente from "./FormularioCliente";

function Cart() {
    const { carrito, limpiarCarrito, eliminarDelCarrito, actualizarCantidad } = useAppContext();
    const [checkout, setCheckout] = useState(false);
    const [form, setForm] = useState({ nombre: "", apellido: "", correo: "", telefono: "" });

    const total = carrito.reduce((acc, item) => acc + item.precio * item.cantidad, 0);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí podrías enviar los datos del formulario
        alert("¡Gracias por tu compra, " + form.nombre + "!"); // Cambiar por librerias
        limpiarCarrito();
        setCheckout(false);
    };

    if (checkout) {
        return (
            <FormularioCliente
                form={form}
                setForm={setForm}
                onSubmit={handleSubmit}
                onChange={handleChange}
            />
        );
    }

    return (
        <div className="cart-container">
            <h2 className="cart-title">Shopping Cart</h2>
            {carrito.length === 0 ? (
                <p>El carrito está vacío.</p>
            ) : (
                <>
                    {carrito.map((item) => (
                        <div className="cart-card" key={item.id}>
                            <img className="cart-img" src={item.imagen} alt={item.nombre} />
                            <div className="cart-info">
                                <h3 className="cart-product-title">{item.nombre}</h3>
                                <p className="cart-product-desc">{item.descripcion}</p>
                                <div className="cart-product-bottom">
                                    <span className="cart-product-price">
                                        ${item.precio.toFixed(2)}
                                    </span>
                                    <button
                                        className="cart-remove-btn"
                                        onClick={() => eliminarDelCarrito(item.id)}>
                                        Remove
                                    </button>
                                    <Contador
                                        cantidad={item.cantidad}
                                        onChange={(nuevaCantidad) =>
                                            actualizarCantidad(item.id, nuevaCantidad)
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="cart-total-section">
                        <h3>
                            Total: <span className="cart-total">${total.toFixed(2)}</span>
                        </h3>
                        <button className="checkout-btn" onClick={() => setCheckout(true)}>
                            Checkout
                        </button>
                        <button className="cart-clear-btn" onClick={limpiarCarrito}>
                            Vaciar carrito
                        </button>
                    </div>
                </>
            )}
            <Link to="/">
                <button className="cart-back-btn">Seguir comprando</button>
            </Link>
        </div>
    );
}

export default Cart;
