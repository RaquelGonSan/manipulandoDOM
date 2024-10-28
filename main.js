let title = document.getElementById('title');

let mainDiv = document.querySelector('.main-div');

let lista = document.querySelectorAll('ul.list > li');


title.innerText = "Nuevo";
title.innerHTML = "<em>Manipulando el DOM</em>";

let imagen = document.querySelector('img');
setTimeout(()=>{
  imagen.setAttribute('src', 'html-5.png');
  imagen.classList.add('img-fluid');
}, 2000)

//imagen.setAttribute('src', 'logo_bird.svg');
//imagen.classList.add('img-fluid');
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

const orange_class = document.getElementsByClassName('fondo_naranja');
//console.log(orange_class);
orange_class[1].classList.add('txt_negrita');

const yellow_class = document.querySelectorAll('.fondo_amarillo');
//console.log(yellow_class);
yellow_class.forEach(element => {
  element.classList.add('txt_azul');
});

const lista_comida = document.getElementsByClassName('comida');
console.log(lista_comida[2]);
//console.log(lista_comida.parentNode)
//console.log(lista_comida.parentElement)



const lista_comidas = document.getElementsByClassName('comida');
console.log(lista_comidas);
for (comida of lista_comidas) {
  //console.log(comida);
  comida.addEventListener('click', hago_click);
}


function hago_click(event){
  let elemento = event.target.innerHTML;
  let respuesta = document.querySelector('.respuesta');
  respuesta.innerHTML = elemento;
 }

// a traves de funcion flecha
//funcion flecha
// for (comida of lista_comidas) {
//    console.log(comida);
//    comida.addEventListener('click', (event) => {
//     let elemento = event.target.innerHTML;
//     let respuesta = document.querySelector('.respuesta');
//     respuesta.innerHTML = elemento;
//   });
// }

const numColor = document.querySelectorAll('.color > p');
numColor.forEach(element => {
  element.setAttribute('style', 'font-weight: bold;');
})

const block_colores = document.querySelector('.block_colores');

const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

const txt_rojo = document.getElementById('txt_rojo');
const txt_verde = document.getElementById('txt_verde');
const txt_azul = document.getElementById('txt_azul');
 
let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

txt_rojo.innerText = rojo;
txt_verde.innerText = verde;
txt_azul.innerText = azul;

function actualizarColor(rojo,verde,azul){
  const rgb = `rgb(${rojo},${verde},${azul})`;
  block_colores.style.backgroundColor = rgb;
}


inputRojo.addEventListener('change', (event) => {
  rojo = event.target.value;
  txt_rojo.innerText = rojo;
  actualizarColor(rojo,verde,azul);
})

inputVerde.addEventListener('change', (event) => {
  verde = event.target.value;
  txt_verde.innerText = verde;
  actualizarColor(rojo,verde,azul);
})

inputAzul.addEventListener('change', (event) => {
  azul = event.target.value;
  txt_azul.innerText = azul;
  actualizarColor(rojo,verde,azul);
})

function leer_json(){
  let datosJson;
  let xhr = new XMLHttpRequest();
  xhr.open('GET', 'persona.json', true);
  xhr.responseType = 'json';
  xhr.onload = function(){
  if(this.status == 200){
    console.log('entro');
    datosJson = this.response;
    let elementoJson = document.querySelector('.contenido_json');
    elementoJson.textContent = JSON.stringify(datosJson);
    elementoJson.textContent += `<br> ${datosJson.nombre}`;
  } else{
    console.log('Error en la peticion');
  }
  }
  xhr.send();
}
