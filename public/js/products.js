async function getProducts() {
    const endpointProds = 'https://gradistore-spi.herokuapp.com/products/all';
    return fetch(endpointProds)
        .then(res => res.json())
        .then(res => res.products)
        .catch(error => console.log('Error getting products'));
}