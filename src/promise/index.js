//Empezamos a construir una promesa
//promesa: Algo que va a pasar, ahora, en el futuro o nunca
//tiene 3 estados, pendiente, cumplido o rechazado
//funcion anonima que nos regresa 2 valores(resolve, reject).

const promise = new Promise(function (resolve, reject){
    resolve('Hey!')
});

const cows = 15;
const countCows = new Promise(function (resolve, reject){
    if (cows > 10){
        resolve(`We have ${cows} cows on the farm`)
    }else{
        reject('There are no cows on the farm')
    }
})

countCows.then((result) => {
    console.log(result);
}).catch((error) =>{
    console.log(error);
}).finally(() => {
    console.log('Finally');
})

//con solo .then se obtiene el resultado de la promesa de acuerdo a resolve o reject
//con .catch podemos obtener más información de un futuro error que se presente
//con .finally podemos imprimir un mensaje que indica que ya se ejecutó la promesa
