//Bolean

let muted:boolean = true;
muted = false;


//Numeros
let numerador:number = 43;

//String
let nombre:string = "Saul";

//Arreglos de un solo tipo
let people:string[] = [];
people = ["Isabel",  "Nicole", "Saul"];

//Arreglo de numeros y string
let peopleAndNumbers:Array<string | number> = []
peopleAndNumbers.push("Ricardo");

//Enum

enum Color {
    Rojo = "Rojo",
    Verde = "Verde",
     Azul = "Azul",
}

let colorFavorito: Color = Color.Rojo;
// console.log(`Mi color favorito es ${colorFavorito}`)

//Any

let comodin:any = 'Jocker';
comodin = {type: 'Wildcard'};
// console.log(comodin);

//Object
let someObject:object = {type: 'wildcard'}
// console.log(someObject)

//Funciones

function add(a:number, b:number):number{
     return a+b;
}

const sum = add(5, 6);

function createAdder(a:number): (number) => number{
     return function(b:number){
          return b + a;
     }
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

// console.log(fourPlus6)

function fullname(firsName: string, lastname?:string): string{
     return `${firsName} ${lastname}`
}

const saul = fullname("Saul", "Corona");

// console.log(saul)

enum Color {
    Negro = "Negro",
    Morado = "Morado",
     Rosa = "Rosa",
}

interface Rectangulo {
     ancho: number,
     alto: number,
     color: Color,
}

let rect:Rectangulo = {
     ancho: 4,
     alto: 6,
     color:Color.Rojo,
}

function area(r:Rectangulo){
     return r.alto * r.ancho
}

const areaReact = area(rect);
console.log(areaReact);

 rect.toString = function(){
     return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`;
}

console.log(rect.toString())