const createBeanBtn = document.querySelector('#create-bean-btn');


document.addEventListener('DOMContentLoaded', function(){
    // add the beans and orders to the HTML
    // both of these functions make a GET request
    addBeans();
    addOrders();
})

createBeanBtn.addEventListener('click', function(){
    let beansTab = document.querySelector('#v-pills-beans');
    beansTab.classList.remove('show');
    beansTab.classList.remove('active');
    let createBeanTab = document.querySelector('#v-pills-create-bean');
    createBeanTab.classList.add('show');
    createBeanTab.classList.add('active');
})

async function addBeans(){
    let beans = await getBeans();
    let beansArticles = document.querySelector('.beans-articles');
    beansArticles.innerHTML = '';
    let i = 1;
    beans.forEach((bean) =>{
        let beanHTML = `
        <article class="bean">
            <div class="num w5">${i++}</div>
            <input type="hidden" class="id" value="${bean.id}">
            <div class="origin w30">${bean.origin}</div>
            <div class="roast-level w20">${bean.roast}</div>
            <div class="price w30">Price: ${bean.price}</div>
            <div class="edit w10"><button class="btn btn-link btn-edit">Edit</button></div>
            <div class="remove w5"><button class="btn btn-link btn-remove">X</button></div>
        </article>
        `;
        beansArticles.insertAdjacentHTML('beforeend', beanHTML);
    })    
}

async function addOrders(){
    let orders = await getOrders();
    let ordersBlock = document.querySelector('.orders-block');
    ordersBlock.innerHTML = '';
    let i = 1;
    orders.forEach((order) => {
        // because the ordered beans is an array
        let orderedBeans = order.orders;
        // create a new variable to store the entire array HTML
        let orderedBeansHTML = '';
        // so for each bean in the array, make a separate HTML
        orderedBeans.forEach((bean) =>{
            // Just a simple dash and a linebreak for each bean
            let beanHTML = `- ${bean}<br>`;
            // and store it in the variable above
            orderedBeansHTML += beanHTML;
        })
        let orderHTML = `
        <article class="bean order-article">
            <div class="num w5">${i++}</div>
            <input type="hidden" class="id" value="${order.id}">
            <div class="origin w20">${orderedBeansHTML}</div>
            <div class="order-name w20">${order.name}</div>
            <div class="order-address w40">${order.address}</div>
            <div class="price w15">${order.total}</div>
            <div class="remove w5"><button class="btn btn-link btn-remove-order">X</button></div>
        </article>
        `;
        ordersBlock.insertAdjacentHTML('beforeend', orderHTML);
    });
}