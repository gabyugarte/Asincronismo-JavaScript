
// 馃挕 饾棖饾椆饾棶饾榾饾棽 #饾煭饾煵: 饾棜饾棽饾椈饾棽饾椏饾棶饾榿饾椉饾椏饾榾 饾煭饾煵/饾煯饾煭 馃挕
// Un generador en JavaScript consta de una funci贸n generadora que muestra un objeto iterable Generator. La palabra reservada 'yield' se usa para pausar y reanudar una funci贸n generadora.

//Declaraci贸n de la funci贸n del Generador
function* gen(){
    yield 1;
    yield 2;
    yield 3;
}
// Para poder iterar con el generador, se puede inicializar un valor con la funci贸n generadora:
const g = gen();
// Entre las propiedades del iterador est谩 next()
//Llamada del m茅todo next en el objeto del Generador
console.log(g.next()); //Imprime el primer yield: {value: 1, done: false}
// next() permite acceder a la funci贸n del generador y obtener con yield dos valores: value y el estado de done, es decir si tenemos yield 1; y mandamos a imprimir el resultado con next() obtenemos `{value: 1, done: false}鈥?:

// El 1 por el valor al lado derecho del primer yield.
// Y done es false porque mientras haya otro yield por operar ser谩 falso.
// Ser谩 true cuando se ejecute cuatro veces next() y la salida mostrar谩 {value: undefined, done: true}. 脡sto se debe a que ya no hay mas nada que mostrar, porque se mand贸 a imprimir un cuarto elemento y el generador solo tiene 3 yield.
// Para obtener solo el valor de value, se escribe next().value de 茅sta forma:
console.log(g.next().value);//Imprime el primer yield: 1
console.log(g.next().value);//Imprime el segundo yield:
console.log(g.next().value);//Si se coloca un cuarto console, la consola indica "Undefined"


//otro ejemplo iterando con un array----------------------------------
//Declaraci贸n de la funci贸n del Generador pasando un argumento
function* iterate(array){
    //El loop del for revisa cada elemento del array
    for (let value of array) {
        yield value; //value es asignado en cada ciclo
    }
}
//la diferencia con el ejemplo anterior es que el iterador se le pasa un argumento
const it = iterate(['Oscar','Omar','Ana','Lucia']);
console.log(it.next().value);//Imprime el primer elemento del array: Oscar
console.log(it.next().value);//Imprime el segundo elemento del array: Omar
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
//Si se coloca un sexto console, la consola indica "Undefined"