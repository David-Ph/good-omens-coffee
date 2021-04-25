async function getOrders(){
    return await fetch('http://localhost:3000/orders')
        .then((response) => response.json())
        .then((data) => data);
}