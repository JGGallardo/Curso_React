import "./ItemListContainer.css";
import Item from "../Item/Item.jsx";
import getProducts from "../../services/mockService";
import { useState, useEffect } from "react";
import Loader from "../Loader/Loader.jsx";
import { useParams } from "react-router";

function ItemListContainer() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { categoria } = useParams();

    useEffect(() => {
        setLoading(true);
        getProducts()
            .then((result) => {
                const filteredProducts = categoria
                    ? result.filter((product) => product.categoria === categoria)
                    : result;
                setProducts(filteredProducts);
                setLoading(false);
            })
            .catch((err) => {
                alert(err);
                setLoading(false);
            });
    }, [categoria]);

    return (
        <div className="item-list-container">
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
