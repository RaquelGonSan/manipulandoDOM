let title = document.getElementById('title');

let mainDiv = document.querySelector('.main-div');

let lista = document.querySelectorAll('ul.list > li');


title.innerText = "Nuevo";
title.innerHTML = "<em>Manipulando el DOM</em>";

let imagen = document.querySelector('img');
imagen.setAttribute('src', 'logo_bird.svg');
imagen.classList.add('img-fluid');
mainDiv.style.backgroundColor = '#008A80';

let old = document.querySelector('.old-div');
document.body.removeChild(old);

let newDiv = document.createElement('div');
newDiv.innerHTML = 'Este es un nuevo div';
document.body.appendChild(newDiv);

let btnClick = document.querySelector('.btnClick');
/*btnClick.addEventListener('click', function(){
  alert('Click');
});*/

btnClick.addEventListener('click', showMessage.bind(null, 'Evento click disparado'));

function showMessage(message){  
  alert(message);
}


let input = document.querySelector('#itemInput');
let addButton = document.getElementById('addButton');
let list = document.querySelector('.listaDinamica');

addButton.addEventListener('click', function(){
  if(input.value.trim() !== ''){
    let newItem = document.createElement('li');
    newItem.innerHTML = input.value;
    list.appendChild(newItem); 
    input.value = '';
  }

})


let filterInput = document.querySelector('#filterInput');
const itemList =document.querySelector('.list');

filterInput.addEventListener('keyup', function(){
  const term = filterInput.value.toLowerCase();
  const items = itemList.getElementsByTagName('li');
  Array.from(items).forEach(function(item){
    const itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(term) != -1){
      item.style.display = 'block';
    }else{
      item.style.display = 'none';
    }
  })
})
 

const draggable = document.querySelector('#draggable');
const dropzone = document.querySelector('#dropzone');

draggable.addEventListener('dragstart', function(){
  setTimeout(() => {
    this.style.display = 'none';
  }, 0);
});

dropzone.addEventListener('dragover', function(event){
  event.preventDefault();

});

dropzone.addEventListener('drop', function(){ 
  draggable.style.display = 'block';
  this.append(draggable);
})