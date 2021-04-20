async function getBeans(){
    return await fetch('http://localhost:3000/beans')
        .then((response) => response.json())
        .then((data) => data);
}