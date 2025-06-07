import db from "./dbProductos.json";

const products = db.productos;

function getProducts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 500);
    });
}

export default getProducts;
