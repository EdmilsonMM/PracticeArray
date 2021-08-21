
/*const a = ["carlos","santana"];

function usuario(b) {
    return console.log(b[1]);
}


console.log(usuario(a));*/

const users = [

    { id : 1 ,nombre: "carlos" ,apellido: "santana"},
    { id : 2 ,nombre: "Maria" ,apellido: "Rivas"},
    { id : 3 ,nombre: "Juan" ,apellido: "Chavez"}
];

/*
//Metodo de Array Map 
const id = "Los ID de los estudiantes : " + users.map(x =>x.id );
const nombre = "Los nombres de los estuantes es " + users.map(x =>x.nombre);
const apellido = "Los apellido son : "+ users.map(x=>x.apellido);


console.log(id);
console.log(nombre);
console.log(apellido);

*/

//Metodo fe filter 

const numeros =[2,1,6,5,8];
const nombres =["carlos","juan"]

const numero = numeros.filter(x => x < 3);
const nombre = nombres.filter(x => x == "maria");

const personas = users.filter(x => x.id == 1);

/*console.log(numero)
console.log(nombres)*/

console.log(personas);

