import "./CartWidget.css";
import { BsFillCartFill } from "react-icons/bs";
function CartWidget({ cantidad }) {
    return <p>Icono de carrito ({cantidad})</p>;
}

export default CartWidget;
