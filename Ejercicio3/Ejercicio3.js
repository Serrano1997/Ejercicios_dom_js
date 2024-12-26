/*1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];*/
const countries1 = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ul = document.createElement('ul'); 

countries1.forEach(country => {
    const li = document.createElement('li'); 
    li.textContent = country;
    ul.appendChild(li); 
});

document.body.appendChild(ul);


//1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const elementoAEliminar = document.querySelector('.fn-remove-me');
elementoAEliminar.remove(); 


/*1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];*/

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const div = document.querySelector('[data-function="printHere"]'); 

const ulCars = document.createElement('ul');

cars.forEach(car => {
    const li = document.createElement('li');
    li.textContent = car;
    ulCars.appendChild(li); 
});

div.appendChild(ulCars); 


/*1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen.
const countries = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];*/

const countries = [
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
  {title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

countries.forEach(country => {
  const div = document.createElement('div');
  
  const h4 = document.createElement('h4');
  h4.textContent = country.title;
  div.appendChild(h4);
  
  const img = document.createElement('img');
  img.src = country.imgUrl;
  div.appendChild(img);
  
  document.body.appendChild(div);
});


/*1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la serie de divs.*/

const button = document.createElement('button');
button.textContent = 'Eliminar último div';
document.body.appendChild(button);

button.addEventListener('click', () => {
    const divs = document.querySelectorAll('div');
    if (divs.length > 0) {
        divs[divs.length - 1].remove();
    }
});


/*1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
divs que elimine ese mismo elemento del html.*/
countries.forEach(country => {
  const div = document.createElement('div');
  
  const h4 = document.createElement('h4'); 
  h4.textContent = country.title;
  div.appendChild(h4);
  
  const img = document.createElement('img');
  img.src = country.imgUrl;
  div.appendChild(img);
  

  const button = document.createElement('button');
  button.textContent = 'Eliminar este div';
  div.appendChild(button); 
  
  
  button.addEventListener('click', () => {
      div.remove(); 
  });
  
  document.body.appendChild(div);
});




