import "./ItemListContainer.css";
import Item from "../Item/Item.jsx";
import { useState, useEffect } from "react";
import Loader from "../Loader/Loader.jsx";
import { useNavigate, useParams } from "react-router";
import { db } from "../../firebaseConfig.js";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { useAppContext } from "../../context/context.jsx";

function ItemListContainer() {
    const [allProducts, setAllProducts] = useState([]);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const { categoria } = useParams();

    const productosCollection = collection(db, "productos");
    const ordenesCollection = collection(db, "ordenes");

    const { carrito, limpiarCarrito } = useAppContext();

    const navigate = useNavigate();

    const filterProducts = (arrayProducts, category) => {
        if (category) {
            setProducts(
                arrayProducts
                    .filter((el) => el.categoria === categoria)
                    .sort((a, b) => Number(a.id) - Number(b.id))
            );
        } else {
            setProducts(arrayProducts.sort((a, b) => Number(a.id) - Number(b.id)));
        }
    };

    useEffect(() => {
        if (allProducts.length === 0) {
            setLoading(true);
            getDocs(productosCollection)
                .then((snapshot) => {
                    const arrayDeProductos = snapshot.docs.map((el) => el.data());
                    setAllProducts(arrayDeProductos);
                    filterProducts(arrayDeProductos, categoria);
                    setLoading(false);
                })
                .catch((err) => console.error(err));
        } else {
            filterProducts(allProducts, categoria);
        }
    }, [categoria]);

    return (
        <div className="item-list-container loader-position">
            {loading ? (
                <Loader />
            ) : products.length > 0 ? (
                products.map((elem) => <Item key={elem.id} {...elem} />)
            ) : (
                <p>No se encontraron productos</p>
            )}
        </div>
    );
}

export default ItemListContainer;
