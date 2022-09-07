//Instalamos node-fetch, vamos a la terminal y en la carpeta del 
//proyecto colocamos npm i node-fetch
//en el navegador no se hace el import de fetch, ya que el navegador lo tiene, lo hacemos x que
//estamos usamdo la consola

import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

//creamos una función en la cual le pasamos la url
//RECIBE COMO ARGUMENTO LA URL DE LA API, LA URL
//me va a retornar el llamado de FETCH DEL, EL CUAL ES UNA promesa
function fetchData(urlApi){
    return fetch(urlApi);
}
//hacemos el llamado, url le agregamops products, 
// fetchData (`${API}/products`)

// .then (response => response.json())//Para transformar la información en un objeto Json
// .then (products => { //mostrarlo para saber quéincluye
//     console.log(products);
// })//Podemos anidar multiples .then
// .then(()=>{
//     console.log('hola');
// })
// .catch(error => console.log(error));

//Vamos a crear la lógica para hacer varios llamados

fetchData(`${API}/products`)
    .then(response => response.json())//Para transformar la información en un obj
    .then(products =>{
        console.log(products);
        return fetchData(`${API}/products/${products[0].id}`)
    })
    .then(response => response.json())
    .then(product => {
        console.log(product.title)
        return fetchData(`${API}/categories/${product.category.id}`)
    })
    .then(response => response.json())
    .then(category => {
        console.log(category.name);
    })
    .catch(err => console.log(err))
    .finally(() => console.log('Finally'));