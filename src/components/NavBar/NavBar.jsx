import "./NavBar.css";
import logo from "../../assets/img/image.png";
import { BsFillCartFill } from "react-icons/bs";

function NavBar() {
    return (
        <nav className="navbar">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img
                        src={logo}
                        alt="Logo"
                        width="30"
                        height="24"
                        className="d-inline-block align-text-top"
                    />
                </a>
                <ul>
                    <li>Pizzas</li>
                    <li>Paninis</li>
                    <li>Bebidas</li>
                </ul>
                <a className="icon-cart">
                    <BsFillCartFill className="icon-cart" />
                    <p>3</p>
                </a>
            </div>
        </nav>
    );
}

export default NavBar;
