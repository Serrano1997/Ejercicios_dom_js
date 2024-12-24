//2.1 Inserta dinamicamente en un html un div vacio con javascript.

const divVacio = document.createElement('div'); 
document.body.appendChild(divVacio); 

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const divConP = document.createElement('div'); 
const parrafo = document.createElement('p'); 
parrafo.textContent = 'Texto en el párrafo'; 
divConP.appendChild(parrafo); 
document.body.appendChild(divConP); 

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
//loop con javascript.

const divCon6P = document.createElement('div'); 
for (let i = 0; i < 6; i++) {
    const p = document.createElement('p');
    p.textContent = `Párrafo ${i + 1}`; 
    divCon6P.appendChild(p); 
}
document.body.appendChild(divCon6P); 

//2.4 Inserta dinamicamente con javascript en un html una p con el 
//	texto 'Soy dinámico!'.

const pDinamica = document.createElement('p');
pDinamica.textContent = 'Soy dinámico!'; 
document.body.appendChild(pDinamica); 


//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const h2InsertHere = document.querySelector('.fn-insert-here'); 
h2InsertHere.textContent = 'Wubba Lubba dub dub';

//2.6 Basandote en el siguiente array crea una lista ul > li con 
//los textos del array.
//const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement('ul'); 

apps.forEach(app => {
    const li = document.createElement('li'); 
    li.textContent = app; 
    ul.appendChild(li); 
});

document.body.appendChild(ul); 

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const elementosAEliminar = document.querySelectorAll('.fn-remove-me'); 
elementosAEliminar.forEach(el => el.remove()); 

//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
//	Recuerda que no solo puedes insertar elementos con .appendChild.

const pEnMedio = document.createElement('p'); 
pEnMedio.textContent = 'Voy en medio!'; 
const divs = document.querySelectorAll('div');


divs[0].parentNode.insertBefore(pEnMedio, divs[1]);

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
//	.fn-insert-here

const divsInsertHere = document.querySelectorAll('.fn-insert-here');
divsInsertHere.forEach(div => {
    const pDentro = document.createElement('p'); 
    pDentro.textContent = 'Voy dentro!'; 
    div.appendChild(pDentro); 
});


