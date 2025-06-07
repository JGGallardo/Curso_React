import "./CartWidget.css";
import { BsFillCartFill } from "react-icons/bs";

function CartWidget({ cantidad }) {
    return (
        <div className="icon-cart">
            <BsFillCartFill className="icon-cart" />
            <span>{cantidad}</span>
        </div>
    );
}

export default CartWidget;
