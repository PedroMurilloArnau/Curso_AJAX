
window.onload = solicitarDatos();
//De esta manera creamos variables en JS 

var nombre = 'Pedro';
var edad = 35;
var pais = 'España';

console.log(nombre);

//De esta forma se objetos en JS sencillisimo

var carlos = {
    "nombre": "Pedro Murillo",
    "edad": 35,
    "pais": "España"
}
console.log(carlos["nombre"]);

//Como crear arreglos en JS

var nombreAmigos = ['Manuela','Paca'];

console.log(nombreAmigos[0]);


//Ejemplo de estructura JSON
var amigos = [
    {
        "nombre": "Pedro",
        "edad": 35,
        "pais": "España"
    },
    {
        "nombre": "Carlos",
        "edad": 31,
        "pais": "Francia"
    }
];

console.log(amigos[0].pais);