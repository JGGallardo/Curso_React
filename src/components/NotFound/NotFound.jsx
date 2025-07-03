import { Link } from "react-router";
import "./NotFound.css";
function ItemDetail() {
    return (
        <div className="notfound-container">
            <p>Pagina no encontrada.</p>
            <Link to="/">
                <button>Volver al inicio</button>
            </Link>
        </div>
    );
}

export default ItemDetail;
