document.addEventListener('DOMContentLoaded', async function(){
    let beans = await getBeans();
    let beansShop = document.querySelector('.shop');
    beansShop.innerHTML = '';
    beans.forEach((bean) =>{
        let beanHTML = `
        <div class="bean-listing">
            <img src="${bean.imageURL}" alt="${bean.origin}" class="bean-listing-img">
            <div class="bean-info">
                <h3 class="bean-listing-origin brown" data-origin="${bean.origin}">${bean.origin}</h3>
                <input type="hidden" class="id" value="${bean.id}">
                <p class="bean-listing-roast">${bean.roast}</p>
                <p class="bean-listing-notes">${bean.notes}</p>
                <p class="bean-listing-price" data-price="${bean.price}">Price: ${bean.price}</p>
                <button class="add-to-cart">Add to Cart</button>
            </div>
        </div>
        `;
        beansShop.insertAdjacentHTML('beforeend', beanHTML);
    })
})