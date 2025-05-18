import React, { useState } from "react";
import "./Contador.css";

function Contador() {
    const [estado, funcion] = useState(5);

    return (
        <div>
            <button className="btn btn-secondary" onClick={() => funcion(estado - 1)}>
                -
            </button>
            <p>{cantidad}</p>
            <button className="btn btn-secondary" onClick={() => funcion(estado + 1)}>
                +
            </button>
            <button className="btn btn-primary" onClick={() => console.log(estado)}>
                Ver contador
            </button>
        </div>
    );
}

export default Contador;
