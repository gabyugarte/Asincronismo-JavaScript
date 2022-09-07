import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

//fetchData (obtener recursos e info de la API para ller los datos que me entregaba)
//postData ( crear recursos en el servidor)
//ya no se solicita informarción si no se guardará información usando postData
function postData(urlApi, data){
    const response = fetch(urlApi, {
        //Qué métodos vamos a usar
        method: 'POST',//tiene que ir en mayúscula
        //permisos mode
        mode: 'cors',//cors es el permiso que va a tener, por defecto va estar siempre en cors
        credentials: 'same-origin', //es opcional
        headers: {
            'content-type': 'application/json', //necesario indicar que lo que se está enviando es de tipo json
        },
        body: JSON.stringify(data), //el método JSON.stringify() convierte un objeto o valor de JavaScript en una cadena de texto JSON
    });
    return response;
}

//En https://fakeapi.platzi.com/doc/products se consigue la estructura de como debe ser el objeto que se quiere crear con POST
const data = {
    "title": "212",
    "price": 212,
    "description": "A description",
    "categoryId": 1,
    "images": ["https://placeimg.com/640/480/any"]
}
//podemos usar el postData como una promesa y con .then obtener la respuesta como un objeto json y mostrarlo después en la consola

postData(`${API}/products`, data)
    .then (response => response.json())
    .then ( data => console.log(data));

