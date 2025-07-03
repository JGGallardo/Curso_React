import { useAppContext } from "../../context/context";
import "./CartWidget.css";
import { BsFillCartFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function CartWidget({}) {
    const { carrito } = useAppContext();
    const navigate = useNavigate();
    return (
        <div className="icon-cart">
            <BsFillCartFill className="icon-cart" onClick={() => navigate("/carrito")} />
            <span>{carrito.reduce((acc, value) => (acc += value.cantidad), 0)}</span>
        </div>
    );
}

export default CartWidget;
