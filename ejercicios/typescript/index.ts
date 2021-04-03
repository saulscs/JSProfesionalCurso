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