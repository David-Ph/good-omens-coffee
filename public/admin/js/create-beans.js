let createForm = document.querySelector('.create-bean-form');
let createOrigin = document.querySelector('#create-origin');
let createRoast = document.querySelector('#create-roast');
let createNotes = document.querySelector('#create-notes');
let createStocks = document.querySelector('#create-stocks');
let createImageUrl = document.querySelector('#create-image-url');
let createImageFile = document.querySelector('#create-image-file');


createForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    let data = new FormData();
    data.append('origin', createOrigin.value);
    data.append('roast', createRoast.value);
    data.append('notes', createNotes.value);
    data.append('stocks', createStocks.value);
    data.append('imageUrl', createImageUrl.value);
    data.append('imageFile', createImageFile.files[0]);

    fetch('http://localhost:3000/beans', {
        method: 'POST', 
        body: data
    }).then((response) => response.text()).then((data) => window.history.go());
});

function disableInput(input1, input2){
    if(input1.value){
        input2.disabled = true;
    }else{
        input2.disabled = false;
    }
}

createImageUrl.addEventListener('change', function() {disableInput(this, createImageFile)});
createImageFile.addEventListener('change', function() {disableInput(this, createImageUrl)});