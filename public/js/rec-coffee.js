let recommendedCoffeeBox = document.querySelector('.recommended-coffee');

async function getCoffeeOfTheDay(){
    let beans = await getBeans();
    // get random beans from random index number
    let randomBean = beans[Math.floor(Math.random() * beans.length)];
    recommendedCoffeeBox.innerHTML = '';
    let randomBeanHTML = `
        <h2 class="quote">Coffee of the day</h2>
        <img src="${randomBean.imageURL}" alt="" class="recommended-beans">
        <div class="coffee-desc">
            <p class="origin brown">Origin: ${randomBean.origin}</p>
            <p class="roast">Roast: ${randomBean.roast}</p>
            <p class="notes">Notes: ${randomBean.notes}</p>
        </div>
        <div class="cta">
            <a href="shop.html" class="buy-now">Browse</a>
        </div>
    `
    recommendedCoffeeBox.insertAdjacentHTML('beforeend', randomBeanHTML);
}

getCoffeeOfTheDay();