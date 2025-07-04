import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { showToast } from "../components/Librerias/ToastNotify";

// 1.
const AppContext = createContext();

// 5.
export const useAppContext = () => useContext(AppContext);

// 2.
export const ContextProvider = (props) => {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (producto) => {
        if (carrito.some((el) => el.id === producto.id)) {
            const nuevoCarrito = carrito.map((element) => {
                if (element.id === producto.id) {
                    return {
                        ...element,
                        cantidad: element.cantidad + producto.cantidad,
                        imagen: producto.imagen,
                        nombre: producto.nombre,
                        precio: producto.precio,
                    };
                } else {
                    return element;
                }
            });
            setCarrito(nuevoCarrito);
        } else {
            setCarrito([...carrito, producto]);
        }
        showToast(`¡${producto.nombre} agregado al carrito!`, "success");
    };

    const limpiarCarrito = () => {
        setCarrito([]);
    };

    const actualizarCantidad = (id, nuevaCantidad) => {
        setCarrito(
            carrito.map((item) => (item.id === id ? { ...item, cantidad: nuevaCantidad } : item))
        );
    };

    const eliminarDelCarrito = (id) => {
        setCarrito(carrito.filter((item) => item.id !== id));
    };

    // 3.
    return (
        <AppContext.Provider
            value={{
                carrito,
                agregarAlCarrito,
                limpiarCarrito,
                actualizarCantidad,
                eliminarDelCarrito,
            }}>
            {props.children}
        </AppContext.Provider>
    );
};
