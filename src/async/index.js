// 🔁 ¿Qué es una función asíncrona?
// La declaración de función async define una función asíncrona que devuelve un objeto, lo cual permite a un programa correr una función sin congelar todo la compilación.
// Dada que la finalidad de las funciones async/await es simplificar el comportamiento del uso síncrono de promesas, se hace más fácil escribir promesas.
// Dentro del archivo index.js, se crea la promesa y luego se valida si la promesa se resolverá, también se hace el llamado de la misma y luego se busca mostrar como se desenvuelve con await. En el ejemplo se usa el if ternario.

const fnAsync = () => {
    return new Promise((resolve, reject) => {
        //Hacer una validación con if ternario
        (true)//se usó operador ternario y se está forzando con true que se cumpla la condición
          ? setTimeout(() => resolve        ('Async!!'),2000)
          : reject(new Error('Error!'));//arroja "error" en caso de que la condición sea falsa
    });
}

//funcion que va a utilizar el concepto de Async y con ello hacer el llamado del await.

const anotherFn = async () => {
     //la palabra async es para el cuerpo de la función
    //la palabra await estará dentro de la lógica a implementar
    const something = await fnAsync();
    //aquí nos está regresando una promesa
    console.log(something);//se imprime mientras se espera
    console.log('Hello!');
}

console.log('Before');//al ser la primera orden con solo console.log, 'Before' se imprime primero
anotherFn();//es el segundo en llamar, pero aún así no se imprimen los console de su lógica y tarda 2 s en ser ejecutada
console.log('After');//aparece justo después de 'Before' porque anotherFn() está esperando una promesa y aún así el programa no se detiene, sino que sigue y así tenemos 'After' de segundo al imprimir

/*La salida al correr con Run Code queda:
Before
After
Async!!
Hello!
*/