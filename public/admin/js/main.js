document.addEventListener('DOMContentLoaded', async function(){
    addBeans();
})

async function addBeans(){
    let beans = await getBeans();
    let beansArticles = document.querySelector('.beans-articles');
    beansArticles.innerHTML = '';
    beans.forEach((bean) =>{
        let beanHTML = `
        <article class="bean">
            <div class="id w5">${bean.id}</div>
            <div class="origin w30">${bean.origin}</div>
            <div class="roast-level w20">${bean.roast}</div>
            <div class="stocks w30">Stock left: ${bean.stocks}</div>
            <div class="edit w10"><button class="btn btn-link">Edit</button></div>
            <div class="remove w5"><button class="btn btn-link">X</button></div>
        </article>
        `;
        beansArticles.insertAdjacentHTML('beforeend', beanHTML);
    })    
}