function getProducts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 150);
    });
}

export default getProducts;
