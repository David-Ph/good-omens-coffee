{
    let beansBlock = document.querySelector('.beans-articles');
    let roastInp = document.querySelector('#update-roast');
    let notesInp = document.querySelector('#update-notes');
    let priceInp = document.querySelector('#update-price');
    let updateForm = document.querySelector('.update-bean-form');
    let id;

    beansBlock.addEventListener('click', async (e) =>{
        if(e.target.classList.contains('btn-edit')){
            id = e.target.parentNode.parentNode.querySelector('.id').value;
            let beanInfo = await fetch(`http://localhost:3000/beans/${id}`)
                .then((resp) => resp.json())
                .then((data) => data);
            
            roastInp.value = beanInfo.roast;
            notesInp.value = beanInfo.notes;
            priceInp.value = beanInfo.price;

            let beansTab = document.querySelector('#v-pills-beans');
            beansTab.classList.remove('show');
            beansTab.classList.remove('active');
            let updateBeansTab = document.querySelector('#v-pills-update-bean');
            updateBeansTab.classList.add('show');
            updateBeansTab.classList.add('active');
        }
    })

    updateForm.addEventListener('submit', async (e) =>{
        e.preventDefault();
        fetch(`http://localhost:3000/beans/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                roast: roastInp.value,
                notes: notesInp.value,
                price: priceInp.value
            })
        }).then((response) => response.text())
        .then((data) => window.history.go())
    })
}