let cartBlock = document.querySelector('.cart');
let shopBlock = document.querySelector('.shop');
let totalPriceDOM = document.querySelector('#total-price');
let totalPrice = 0;
let cartItems = [];


shopBlock.addEventListener('click', async (e) =>{
    // ADD CART TO THE HTML
    if(e.target.classList.contains('add-to-cart')){
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
        totalPrice += parseInt(itemPrice);
        totalPriceDOM.innerHTML = totalPrice

        // setting up items to send to server
        let itemId = e.target.parentNode.querySelector('.id').value;
        let newCartItem = await fetch(`http://localhost:3000/beans/${itemId}`)
            .then((response) => response.json())
            .then((data) => data)
        cartItems.push(newCartItem);
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