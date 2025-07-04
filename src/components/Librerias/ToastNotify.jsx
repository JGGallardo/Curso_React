import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Función para mostrar un toast personalizado
export const showToast = (mensaje, tipo = "info", opciones = {}) => {
    toast[mensaje ? tipo : "info"](mensaje, opciones);
};

// Componente contenedor de Toastify
const ToastNotify = () => (
    <ToastContainer
        position="top-right"
        autoClose={300}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
    />
);

export default ToastNotify;
