import { useEffect, useState } from "react";
import "./Contador.css";

function Contador() {
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

    return (
        <div>
            <button className="btn btn-secondary" onClick={restarCantidad}>
                -
            </button>
            <p>{cantidad}</p>
            <button className="btn btn-secondary" onClick={sumarCantidad}>
                +
            </button>
        </div>
    );
}

export default Contador;
