// Letra A
let sequencia1 = [1,3,5,7];
let ultimonum1 = sequencia1[sequencia1.length - 1];
let proximonum1 = ultimonum1 + 2;

console.log('Letra A: ' + proximonum1);

//Letra B
let sequencia2 = [2, 4, 8, 16, 32, 64];
let ultimonum2 = sequencia2[sequencia2.length - 1];
let proximonum2 = ultimonum2 * 2;

console.log('Letra B: ' + proximonum2);

//Letra C
let sequencia3 = [0, 1, 4, 9, 16, 25, 36];
let ultimonum3 = sequencia3[sequencia3.length - 1];
let proximonum3 = Math.pow(((Math.sqrt(ultimonum3))+1), 2);

console.log('Letra C: ' + proximonum3);

//Letra D
let sequencia4 = [4, 16, 36, 64];
let ultimonum4 = sequencia4[sequencia4.length - 1];
let proximonum4 = Math.pow(((Math.sqrt(ultimonum4))+2), 2);

console.log('Letra D: ' + proximonum4);

//Letra E
let sequencia5 = [1, 1, 2, 3, 5, 8];
let ultimonum5 = sequencia5[sequencia5.length - 1];
let proximonum5 = ultimonum5 + (sequencia5[sequencia5.length - 2]);

console.log('Letra E: ' + proximonum5);

//Letra F
//A lógica que se refere a sequência "2,10, 12, 16, 17, 18, 19" é que todos os números começam com a letra D.
console.log('Letra F: 200');
