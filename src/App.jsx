import { Link, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import ItemDetail from "./components/ItemDetail/ItemDetail";

function App() {
    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/categoria/:categoria" element={<ItemListContainer />} />
                <Route path="/detalle/:id" element={<ItemDetail />} />
                <Route path="/contacto" element={<p>Seccion de Contacto</p>} />
                <Route
                    path="*"
                    element={
                        <div style={{ textAlign: "center", marginTop: "50px" }}>
                            <h2>Página no encontrada</h2>
                            <Link to="/">
                                <button>Volver al inicio</button>
                            </Link>
                        </div>
                    }
                />
            </Routes>
        </>
    );
}

export default App;
