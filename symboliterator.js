let lenguajes = ["PYTHON", "JAVA","C++","C#","PHP","JAVASCRIPT"];

console.log(lenguajes);

let iterador = lenguajes[Symbol.iterator]();

console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());