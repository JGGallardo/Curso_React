import "./NavBar.css";
import logo from "/assets/img/image.png";
import CartWidget from "../CartWidget/CartWidget";
import { BsFillCartFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="navbar">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand" href="#">
                    <img
                        src={logo}
                        alt="Logo"
                        width="30"
                        height="24"
                        className="d-inline-block align-text-top"
                    />
                </Link>
                <ul>
                    <li>
                        <Link to="/">Productos</Link>
                    </li>
                    <li>
                        <Link to="/categoria/Pizzas">Pizzas</Link>
                    </li>
                    <li>
                        <Link to="/categoria/Paninis">Paninis</Link>
                    </li>
                    <li>
                        <Link to="/categoria/Bebidas">Bebidas</Link>
                    </li>
                    <li>
                        <Link to="/contacto">Contacto</Link>
                    </li>
                </ul>
                <CartWidget cantidad={2} />
            </div>
        </nav>
    );
}

export default NavBar;
