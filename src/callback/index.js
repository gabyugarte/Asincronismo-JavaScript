// CALLBACK ->funcion que pasa como argumento otra función y dentro será utilizada según sea el caso

function sum(num1, num2){
    return num1 + num2;
}

//pasamos 3 argumentos, el tercero es nuestra función la llamamos callback
//El tercer argumento no necesariamente se tiene que llamar callback
function calc(num1, num2, callback){
    //segunda función que recibe como argumento una función
    return callback(num1, num2);
}
//no es necesario poner la función sum con parentesis sum(), por que sino la estaríamos invocando inmediatamente
//no es necesario oasarle a sum los argumentos, ya que en calc también lo estamos asignando

console.log(calc(2, 2, sum));

// ------------------------------------------------------

//Usaremos setTimeOut(funcion, tiempo, argumentos(opcional));

setTimeout(function(){
 console.log('Hello Javascript')
}, 2000)

//------------------------------------------------------------------
// setTimeOut(funcion, tiempo, argumentos(opcional))
function greeting(name){
    console.log(`Hello ${name}`);
}

setTimeout(greeting, 2000, 'Gaby');
