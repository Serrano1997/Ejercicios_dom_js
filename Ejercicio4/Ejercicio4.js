//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
//evento click que ejecute un console log con la información del evento del click
const btnToClick = document.getElementById('btnToClick'); 

btnToClick.addEventListener('click', (event) => {
    console.log(event); 
});


//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const inputFocus = document.querySelector('.focus'); 

inputFocus.addEventListener('focus', () => {
    console.log(inputFocus.value); 
});


//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

const inputValue = document.querySelector('.value'); 

inputValue.addEventListener('input', () => {
    console.log(inputValue.value); 
});


/*Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html 
que imprima cada uno de los albums.

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
]; */

const albums = [
  "De Mysteriis Dom Sathanas",
  "Reign of Blood",
  "Ride the Lightning",
  "Painkiller",
  "Iron Fist",
];
const ul = document.createElement('ul');

albums.forEach(album => {
    const li = document.createElement('li');
    li.textContent = album;
    ul.appendChild(li);
});

document.body.appendChild(ul); 
