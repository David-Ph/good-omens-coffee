let createForm = document.querySelector('.create-bean-form');
let createOrigin = document.querySelector('#create-origin');
let createRoast = document.querySelector('#create-roast');
let createNotes = document.querySelector('#create-notes');
let createStocks = document.querySelector('#create-stocks');
let createImageUrl = document.querySelector('#create-image-url');
// let createOrigin = document.querySelector('#create-origin');


createForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    fetch('http://localhost:3000/beans', {
        method: 'POST', 
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            origin: createOrigin.value,
            roast: createRoast.value,
            notes: createNotes.value,
            stocks: createStocks.value,
            imageUrl: createImageUrl.value
        })
    }).then((response) => response.text())
    .then((data) => window.history.go());
});