import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

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
        toast.success("Producto agregado correctamente", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
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

    // Cantidad de productos
    // carrito.reduce((acc,value) => acc += value.cantidad, 0)

    // Precio final
    // carrito.reduce((acc,value) => acc += (value.cantidad * value.price), 0)

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
