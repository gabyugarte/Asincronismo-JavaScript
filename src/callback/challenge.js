// we will work with an API platzi
// vamos a la consola y instalamos el xmlhttprequest ->  npm i xmlhttprequest

const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; //Ya tene os una referencia de lo que vamos a implementar de este recurso
// Lo que hace aquí “require()” es importar el módulo del id que le pasemos, además puede importar JSON y archivos locales.
//Pero necesitamos trabajar con XMLHttpRequest para manipular la API
//Llamamos a nuestra API, lo ponemos en mayusculas, esto hace una referencia que es un valor que no va a cambiar dentro de nuestros archiuvos

const API = 'https://api.escuelajs.co/api/v1';

//creamos una funcion que nos permite recibir la url y el callback

function fetchData(urlApi, callback) {
    //urlApi: no confundir y colocar API
    // El parámetro ‘urlApi’ hace referencia a cualquier API con la cuál estemos trabajando, en este caso la FakeStore de PlatzI
    // El segundo parámetro ‘callback’ es donde posteriormente vamos a pasar una función como argumento para poder controlar el flujo de información de la API.

    let xhttp = new XMLHttpRequest ();
    //referencia a new XMLHttpRequest
    // Necesitamos alguna manera de poder manipular las solicitudes que haremos para consultar los datos,
    // para ello vamos a crear un espacio en memoria (una variable) en donde guardar el objeto (XHR) que importamos y
    // gracias a los métodos ya construídos nos será mil veces más fácil desarrollar nuestra funcíon.

    xhttp.open('GET', urlApi, true);
    // Muy bien, ya podemos utilizar nuestra variable ‘xhttp’ (en conjunto al callback) como un objeto para acceder y manipular la API.
    // Primero debemos abrir una solicitud (un request) esto lo hacemos con el método ‘.open()’
    // Ahora bien el primer parámetro es el tipo de solicitud que vamos a realizar, pudo haber sido “POST”, “PUT”, “DELETE”. 
    //Pero vamos a utilizar “GET” 😎
    //El segundo parámetro es la url de la API a la cuál le vamos a realizar el request.
    //Tercer parámetro recibe un booleano para indicarle si vamos a utilizar asíncronismo o no, tal simple como TRUE o FALSE según el caso.
    //petición "obtener" con true para habilitarlo

    xhttp.onreadystatechange = function (event){
     // Vamos a hacer una función anónima para verificar que el request de los datos ha salido con éxito y en caso de un tener error hacer registro de éste. Para ello nos vamos a apoyar de la propiedad de ‘.onreadystatechange’ ésta llamará a la función cada que el readyState cambie (readyState retorna el número del estado en dónde se encuentra el request)
    //(onreadystatechange)escucha diferentes estados de la solicitud y conocer cuando está disponible la información
    //validamos el estado en que se encuentra
    //function(event) escucha diferentes estados de la solicitud y conocer cuando está disponible la información

    if (xhttp.readyState === 4){
        //validamos el tipo de estado con un if
        //Dentro de los estados de readyState, tenemos valores o ciclos de vida
        //valor 0 = No se ha inicializado
        // 1 → Loading (cargando).No se ha llamado el valor de send cuando se ejecuta
        // 2 → Se ha cargado.
        // 3 → Procesamiento si existe alguna descarga.
        // 4 → Completada la llamada

        if (xhttp.status === 200) {
            // Una vez completado con éxito necesitamos saber que tipo de respuesta nos entregó el servidor, así que volvemos a verificar con un ’ if ’ la propiedad ‘.status’ según el tipo de respuestas:
            // validación del status sobre valor y tipo, en este caso valor 200 (quiere decir que la solicirud ha sido correcto)
            // xhttp.status Retorna el estado de la respuesta de la petición. (200,400,500)
            // 200 → OK → Indica que todo está correcto.
            // 201 → Created → Todo está correcto cuando se hizo una solicitud POST, el recurso se creó y se guardó correctamente.
            // 204 → No Content → Indica que la solicitud se completó correctamente pero no devolvió información. Este es común cuando se hacen peticiones con el verbo DELETE.
            // 400 → Bad Request → Indica que algo está mal en la petición (no encontró algo).
            // 401 → Unauthorized → Significa que antes de hacer una solicitud al servidor nos debemos autenticar.
            // 403 → Forbidden → Indica que no tenemos acceso a ese recurso aunque se esté autenticado.
            // 404 → Not Found → Indica que no existe el recurso que se está intentando acceder.
            // 500 → Internal Server Error → Indica que algo falló, es un error que retorna el servidor cuando la solicitud no pudo ser procesada.
            callback(null, JSON.parse(xhttp.responseText));
            //dentro de xhttp.responseTex recibimos lo que entrega el servidor en texto y se hace la transformación en JSON
            // En el primer parámetro vamos a utilizarlo en caso de que se presente un error, pero como ya hemos verificado eso podemos simplemente dejarlo como un ‘null’.
            // En el segundo usamos la función ‘JSON.parse()’ para convertir en datos que podamos controlar el texto que nos retorna la propiedad ‘.responseText’ después de hacer el request.
        }else{
            const error = new Error('Error' + urlApi);
            return callback(error, null);
            //Hay que regresarnos al primer if y utilizar la estructura de else para que en caso de haber un error registrarlo y enviarlo al callback (donde antes habiamos puesto ‘null’) y ahora pasar el null en la parte de los datos, ya que nunca pudo consultarlos.
        }
    }
}
//el método .send() envia la petición al servidor
xhttp.send();
// 🏆 ¡¡ Acabamos la función !! 🏆
// Ya solo resta utilizar el método ‘.send()’ después de procesar los datos para enviar el request al server (API)

}

//se invoca el metodo fetchData() pasandole como argumentos la varible API concatenada con la cadena 'products' para acceder a la URL de la API deseada, y una función anónima que recibe 2 parámetros (un objeto de error y un arreglo que almacena todos los objetos traidos por la API).

fetchData(`${API}/products`, function (error1, data1){
    //se valida si existe un error, en caso de que exista se detiene el proceso y se imprime el error
    if (error1) return console.error(error1);
      //se invoca nuevamente la función fetchData con el fin de acceder a un objeto puntual del arreglo data1, se envia como parámetros la url de la API apuntando al atributo del primer objeto de arreglo data1 y nuevamente una función anónima.
    fetchData(`${API}/products/${data1[0].id}`, function (error2, data2){
          //si en este punto se identifica un error se imprime en consola y se detiene el proceso
        if (error2) return console.error(error2);
            //Se invoca nuevamente la funcion fetchData con el fin de acceder a la categoria, se envían como       parametros la url de la API con la concatenación de 'Categories' y el atributo Id de categoria del  objeto data2 de la función anterior
            //en este caso puntual se hace uso de Optional Caining el cual hace una evalucación de las propiedades de un objeto y en vez de arrojar un error devuelve undefined en caso que la propiedad no exista o sea null.
            //igual que las anteriores e envia una funcion anonima con 2 argumentos, un objeto Error y un objeto de datos
        fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3){
            //se valida si existe error, en caso de que exista se detiene el proceso y se imprime el error
            if (error3) return console.error(error3);
               //Se imprime el objeto en la posición 1 del arreglo de los objetos obtenidos en el metodo invocado inicialmente
               console.log(data1[0]);
                //Se imprime el titulo del objeto que se consultó en la seguna invocación de la función
               console.log(data2.title);
                //Se imprime el nombre de la categoria a la que pertenece el objeto que se consultó en la seguna invocación del método.
               console.log(data3.name);
        });
    });
});

// Ir a la terminal, para compilar challenge.js se coloca: node src/callback/challenge.js
// Se obtiene las 3 salidas: el id, el título que corresponde al id y el nombre del tipo de categoría:

// Para ejecutar mediante un script, se edita el archivo package.json y en la parte de “scripts” se sustituye la línea: "test": "echo \"Error: no test specified\" && exit 1" por "callback": "node src/callback/challenge.js"

// Se guarda con Ctrl + S y en la terminal, se ejecuta: npm run callback y debe aparecer la misma salida que node …




