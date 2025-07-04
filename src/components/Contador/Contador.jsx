import { useEffect, useState } from "react";
import "./Contador.css";

function Contador({ cantidad = 1, onChange }) {
    function restarCantidad() {
        if (cantidad > 1) {
            onChange(cantidad - 1);
        }
    }

    function sumarCantidad() {
        if (cantidad < 10) {
            onChange(cantidad + 1);
        }
    }

    return (
        <div className="btn-contador">
            <button className="btn btn-secondary" onClick={restarCantidad}>
                -
            </button>
            <p>{cantidad}</p>
            <button className="btn btn-secondary " onClick={sumarCantidad}>
                +
            </button>
        </div>
    );
}

export default Contador;
