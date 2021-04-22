const createBeanBtn = document.querySelector('#create-bean-btn');


document.addEventListener('DOMContentLoaded', function(){
    addBeans();
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