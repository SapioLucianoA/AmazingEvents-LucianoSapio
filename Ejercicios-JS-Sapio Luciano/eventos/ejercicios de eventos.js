// ejercicio 1
const div1 = document.getElementById("div1")
const boton1 = document.getElementById("boton1")

let colorcuadrado = 1

boton1.addEventListener("click", ()=>{
    if(colorcuadrado === 1 ){
        div1.classList.remove("color1");
        div1.classList.add("color2");
        div1.innerHTML = `` 
        div1.innerHTML +=`
        <h2> celeste </h2>
        `;
        colorcuadrado = 2;
    } else if(colorcuadrado === 2){
        div1.classList.remove("color2");
        div1.classList.add("color3");
        colorcuadrado = 3;
        div1.innerHTML = `` 
        div1.innerHTML +=`
        <h2> rojo </h2>
        `;
    } else {
        div1.classList.remove("color3");
        div1.classList.add("color1");
        colorcuadrado = 1;
        div1.innerHTML = `` 
        div1.innerHTML +=`
        <h2> gris </h2>
        `;
    }
})
// ejercicio 2

const textarea = document.getElementById("textarea");
const input = document.getElementById("input")
const button2 = document.getElementById("button2")



input.addEventListener(`keydown`, (e)=> {
    if(e.key === `Enter`){
        textarea.innerHTML += `
        ${input.value}
        </br>` ;
        input.value = ``;
    }
    
} )
button2.addEventListener(`click`, ()=>{
    textarea.innerHTML = ``
})

// ejericcio 3
const inputejericio1 = document.getElementById("inputejericcio3-1")
const inputejericio2 = document.getElementById("inputejericcio3-2")
const inputejericio3 = document.getElementById("inputejericcio3-3")
const button3 = document.getElementById("button3")


button3.addEventListener(`click`, (e) => {
    let alturaEnMTS = Number(inputejericio2.value) /100
    console.log(alturaEnMTS)
    let valorIMC = (inputejericio1.value / (Math.pow (alturaEnMTS, 2)))
    console.log(valorIMC)
    inputejericio3.value = valorIMC
})

// ejerciocio 4
const inputpesoargentino = document.getElementById("pesoARG")
const inputdolarUSA = document.getElementById("dolarUSA")

inputpesoargentino.addEventListener(`input`, () =>{
    inputdolarUSA.value = (Number(inputpesoargentino.value)/ 500)   
} )

inputdolarUSA.addEventListener(`input`, ()=> {
    inputpesoargentino.value = (Number(inputdolarUSA.value) * 500)
})