let cartContainer = document.querySelector('.cart-container');
let cartBlock = document.querySelector('.cart');
let shopBlock = document.querySelector('.shop');
let totalPriceDOM = document.querySelector('#total-price');
let orderBox = document.querySelector('.order-box');
let orderBtn = document.querySelector('.order-btn');
let orderForm = document.querySelector('.order-form');
let orderName = document.querySelector('#order-name');
let orderAddress = document.querySelector('#order-address');
let totalPrice = 0;
let cartItems = [];


shopBlock.addEventListener('click', async (e) =>{

    // ADD CART TO THE HTML
    if(e.target.classList.contains('add-to-cart')){
        // show cart element
        cartContainer.classList.remove('hidden-box');
        // add the selected element to the cart HTML
        let itemOrigin = e.target.parentNode.querySelector('.bean-listing-origin').dataset.origin;
        let itemPrice = e.target.parentNode.querySelector('.bean-listing-price').dataset.price;
        let itemHTML = `
        <div class="cart-item">
            <div class="item-origin w45">${itemOrigin}</div>
            <div class="item-price w45" data-price="${itemPrice}">${itemPrice}</div>
            <div class="item-remove w5"><button class="btn btn-link btn-remove-item">X</button></div>
        </div>   
        `;
        cartBlock.insertAdjacentHTML('beforeend', itemHTML);

        // update total price
        totalPrice += parseInt(itemPrice);
        totalPriceDOM.innerHTML = totalPrice

        // setting up items to send to server
        cartItems.push(itemOrigin);
        console.log(cartItems);
    }
})

// REMOVE CART ITEM
cartBlock.addEventListener('click', (e) =>{
    if(e.target.classList.contains('btn-remove-item')){
        let itemToDelete = e.target.parentNode.parentNode;

        // deduct the price from total price
        let priceToDeduct = itemToDelete.querySelector('.item-price').dataset.price;
        totalPrice -= parseInt(priceToDeduct);
        totalPriceDOM.innerHTML = totalPrice
        
        // finally, remove the item from html
        itemToDelete.remove();
    }
})

// show address form when clicking order button
orderBtn.addEventListener('click', () =>{
    orderBox.classList.toggle('hidden-box');
})

// send the order to the server
orderForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    fetch('http://localhost:3000/orders', {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({
            name: orderName.value,
            address: orderAddress.value,
            orders: cartItems,
            total: totalPrice
        })
    }).then((response) => response.text())
    .then((data) => {
        alert('Order sent!');
        window.history.go();
    });
})