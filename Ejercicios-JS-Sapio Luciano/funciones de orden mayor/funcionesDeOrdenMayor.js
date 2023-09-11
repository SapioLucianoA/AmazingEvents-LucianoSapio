// ejercicio 1
mensaje => console.log(mensaje);
// ejrcicio 2
(num1, num2) => {return num1 * num2}
// ejercicio 3
const array = [ 1,2,3,4,5,6,7,8,9 ]
// ?????
// ejercicio 4
console.log(beers)

let alcoholBeer = [];
function BeerOfAtenbuationLevel(beers) {
    let sortedBeers = beers.sort((a, b) => b.attenuation_level - a.attenuation_level);
    alcoholBeer = sortedBeers.slice(0, 10)
}
BeerOfAtenbuationLevel(beers)
// console.log (alcoholBeer)


// ejericicio 5
let beerIbu = []
function BeerOfIBU(beers){
    let sortedBeers = beers.sort((a, b) => a.ibu - b.ibu);
    beerIbu = sortedBeers.slice(0, 10)
}
BeerOfIBU(beers)
// console.log(beerIbu)

// ejercicio 6

function searchBeer(nombre){
    let cervezaEncontrada = beers.find(cerveza => cerveza.name === nombre);
   console.log (cervezaEncontrada)
}
// searchBeer("Vice Bier")

// ejercicio 7
let ibusmayores = []

function ibuMayora (num) {
    let ibufilter = beers.filter(beeru => beeru.ibu === num);
    let cervezaEncontradas = ibufilter
    if (cervezaEncontradas.length>0){
        console.log(cervezaEncontradas)
    } else{
        console.log( `No existe cerveza con un ibu de ${num}` )
    }
}
// ibuMayora(18)

// ejericcio 8
function searchBeerindex (nombre){
    let cervezaIndex = beers.findIndex(beeru => beeru.name === nombre);
    console.log(cervezaIndex);0
}
// searchBeerindex("Vice Bier");

// ejercicio 9
let cervezaABV = [];
function valorDEabv(array, num) {
   let cervezasFiltradas = array.filter(beeru => beeru.abv <= num);
   cervezaABV = cervezasFiltradas.map (beeru => ({
    Nombre: beeru.name,
    Alcohol: beeru.abv,
    Amargor: beeru.ibu,
   }))
    
};
valorDEabv(beers, 10)
// console.log(cervezaABV)

// ejercicio 10
let ordenDeArray = [];
function acomodarCervezas(array, element, boolean){
    if (boolean === true){
        let sortedBeers = array.sort((a, b) => a[element] - b[element]);
        ordenDeArray = sortedBeers.slice(0,10)
    } else {
        let sortedBeers = array.sort((a, b) => b[element] - a[element]);
        ordenDeArray = sortedBeers.slice(0,10)
    }
}
acomodarCervezas(beers, "abv", false)
// console.log(ordenDeArray)

// ejercicio 11
function TablaCatadora(array, id){
    let table = "<table><tr><th>Name</th><th>ABV</th><th>IBU</th></tr>";
    for (let i = 0; i < array.length; i++) {
        table += "<tr><td>" + array[i].name + "</td><td>" + array[i].abv + "</td><td>" + array[i].ibu + "</td></tr>";
    }
    table += "</table>";
    document.getElementById(id).innerHTML = table;
}
TablaCatadora (beers, "tabla")
