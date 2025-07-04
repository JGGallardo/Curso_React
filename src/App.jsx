import { Link, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import ItemDetail from "./components/ItemDetail/ItemDetail";
import NotFound from "./components/NotFound/NotFound";
import { ContextProvider } from "./context/context";
import Cart from "./components/Cart/Cart";
import { ToastContainer } from "react-toastify";

function App() {
    return (
        <ContextProvider>
            <ToastContainer />
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/categoria/:categoria" element={<ItemListContainer />} />
                <Route path="/detalle/:id" element={<ItemDetail />} />
                <Route path="/contacto" element={<p>Seccion de Contacto</p>} />
                <Route path="/carrito" element={<Cart />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </ContextProvider>
    );
}

export default App;
