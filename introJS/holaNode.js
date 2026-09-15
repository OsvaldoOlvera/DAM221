console.log("Hola mundo Node");

let edad1=20;
let edad2=7;

console.log("Edad promedio: ");
console.log((edad1 + edad2)/2);

console.log(" Medir Procesos ");

console.time("miProceso");
    for(let i=0; i<1000000; i++){}
console.timeEnd("miProceso");