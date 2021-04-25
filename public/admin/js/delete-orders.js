let ordersBlockForDelete = document.querySelector('.orders-block');

ordersBlockForDelete.addEventListener('click', (e) =>{
    if(e.target.classList.contains('btn-remove-order')){
        let id = e.target.parentNode.parentNode.querySelector('.id').value;
        fetch(`http://localhost:3000/orders/${id}`, {
            method: 'DELETE'
        } ).then((resp) => resp.text()).then(() => window.history.go());
    }
})