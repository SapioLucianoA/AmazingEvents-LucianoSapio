fetch(`https://mindhub-xj03.onrender.com/api/amazing`)
    .then(response => response.json())
    .then(data => { 
        console.log(data)

        let arrayDeAssists = []
    filtroAssit(data, "assistance", arrayDeAssists)
        

    // tabla 1 datos

        let arrayOrdenada = []
    arraysenPorcentaje(arrayDeAssists, "assistance", "capacity", arrayOrdenada)

        // primero y ultimo en porcentaje de assitance
        let fisrtsAndLastAssist = [];
        fisrtsAndLast(arrayOrdenada, fisrtsAndLastAssist)
      

        // tabla 1 mayor capacidad
        let capacidadMayor = []
        mostelement (data, "capacity", capacidadMayor)

        // console.log(capacidadMayor)

        // tabla 1 creador
        tablaCeator1 (fisrtsAndLastAssist, capacidadMayor, tabla1, "assistance", "capacity")

        //tabla2 datos
        let filtracionxCategoryMoney = ordenarPorCategoriaYGananciaAssist(arrayDeAssists);
        

        // tabla2 creator
        tabla2creator(filtracionxCategoryMoney)

        // tabla 3 datos
        let arrayDeEstimates = []
        filtroEstimate(data, "estimate", arrayDeEstimates)
        
        let filtracionxMoneyEstimated = ordenarPorCategoriaYGananciaEstimates(arrayDeEstimates)
        console.log(filtracionxMoneyEstimated)

        // tabla 3 creator
        tabla3creator(filtracionxMoneyEstimated)
    })
    .catch(error => console.log(error))

    
    function filtroAssit(array, element, arrayDeAssists){
        let filtro = array.events.filter(evento => evento.hasOwnProperty(element))
        arrayDeAssists.push(...filtro)
    }
        

    //manejo de datos tabla 1
    

    function arraysenPorcentaje(array, element1, element2, arrayOrdenada ){
        for (let event of array){
            event.porcentaje = (event[element1] / (event[element2] / 100)).toFixed(2);
        }
        array.sort((a, b) => b.porcentaje - a.porcentaje);
        arrayOrdenada.push(...array)
    }
   
    function fisrtsAndLast (array, fisrtsAndLastAssist){
       let filtrado = array.slice(0, 1).concat(array.slice(-1))
       fisrtsAndLastAssist.push(...filtrado)
    }

    function mostelement (array, element, array2){
        let evento = array.events.sort((a, b) => b[element] - a[element]);
        let elmayor = evento.slice(0,1)
        array2.push(...elmayor)
    }
    
    // primera tabla impresion 
 const tabla1 = document.getElementById("tabla-1")
 function tablaCeator1 (array1, array2, position, element1, element2){
    let tabla = `
    <table class="w-100">
    <tr>
      <th colspan="3">
        <p class="fs-5 fw-bold text-center">Event Statistics</p>
      </th>
    </tr>
    <tr>
      <td class="text-center fw-bold">Events with highest % of assistance</td>
      <td class="text-center fw-bold">Events with lowest % of assistance</td>
      <td class="text-center fw-bold">Events with larger capacity</td>
    </tr><tr>`;
    
    for (let i = 0; i < array1.length; i++) {
        tabla += `<td class ="text-center fw-bold">${array1[i].name}: ${(array1[i][element1]/(array1[i][element2]/100))}%</td>`;
    }
    
    for (let i = 0; i < array2.length; i++) {
        tabla += `<td class= "text-center fw-bold">${array2[i].name}-Capacity: ${array2[i][element2]}</td>`;
    }
    
    tabla += `</tr></table>`;
    
    position.innerHTML = tabla;
}

// manejo de datos tabla 2

function ordenarPorCategoriaYGananciaAssist(arrayDeAssists) {
    // Primero, creamos un objeto para almacenar los eventos por categoría
    let categorias = {};

    // iteramos sobre cada evento
    for (let evento of arrayDeAssists) {
        if (evento.hasOwnProperty('assistance') && evento.hasOwnProperty('price')) {
            evento.ganancia = evento.assistance * evento.price;
        }
        if (!categorias.hasOwnProperty(evento.category)) {
            categorias[evento.category] = [];
        }

        categorias[evento.category].push(evento);
    }

    // iterar y ordenar
    for (let categoria in categorias) {
        categorias[categoria].sort((a, b) => b.ganancia - a.ganancia);
        
        // el number one
        categorias[categoria] = categorias[categoria][0];
    }

    // Convertimos los valores del objeto a un array y lo devolvemos
    return Object.values(categorias);
}

// creador tabla2
const tabla2 = document.getElementById("tabla-2")
function tabla2creator(array){
    let html = `
    <table class="w-100">
    <tr>
      <th colspan="3">
        <p class="fs-5 fw-bold text-center">Past events statistics by category</p>
      </th>
    </tr>
    <tr>
      <td class="text-center fw-bold">categories</td>
      <td class="text-center fw-bold" >Revenues</td>
      <td class="text-center fw-bold" >Porcentage of assistance</td>
    </tr>
    `;
    for (let events of array){
        html +=`
        <tr>
          <td class="text-center fw-bold" >${events.category}</td>
          <td class="text-center fw-bold" >$ ${(events.assistance*events.price)}</td>
          <td class="text-center fw-bold" >${(events.assistance/(events.capacity/100)).toFixed(2)}%</td>
        </tr>
        `
    };
    html +=`
    </table>
    `;
    tabla2.innerHTML = html;
}

    // tabla 3 manejo de datos
function filtroEstimate(array, element, array2){
    let filtro = array.events.filter(evento => evento.hasOwnProperty(element))
    array2.push(...filtro)
}

function ordenarPorCategoriaYGananciaEstimates (arrayDeEstimates){
    // Primero, creamos un objeto para almacenar los eventos por categoría
    let categorias = {};

    // iteramos sobre cada evento
    for (let evento of arrayDeEstimates) {
        if (evento.hasOwnProperty('estimate') && evento.hasOwnProperty('price')) {
            evento.ganancia = evento.estimate * evento.price;
        }
        if (!categorias.hasOwnProperty(evento.category)) {
            categorias[evento.category] = [];
        }

        categorias[evento.category].push(evento);
    }

    // iterar y ordenar
    for (let categoria in categorias) {
        categorias[categoria].sort((a, b) => b.ganancia - a.ganancia);
        
        // el number one
        categorias[categoria] = categorias[categoria][0];
    }

    // Convertimos los valores del objeto a un array y lo devolvemos
    return Object.values(categorias);
}

// creador de tabla3
const tabla3 = document.getElementById("tabla-3")
function tabla3creator(array){
    let html = `
    <table class="w-100">
    <tr>
      <th colspan="3">
        <p class="fs-5 fw-bold text-center">Upcoming events statistics by category</p>
      </th>
    </tr>
    <tr>
      <td class="text-center fw-bold">categories</td>
      <td class="text-center fw-bold" >Revenues</td>
      <td class="text-center fw-bold" >Porcentage of estimated</td>
    </tr>
    `;
    for (let events of array){
        html +=`
        <tr>
          <td class="text-center fw-bold" >${events.category}</td>
          <td class="text-center fw-bold" >$ ${(events.estimate*events.price)}</td>
          <td class="text-center fw-bold" >${(events.estimate/(events.capacity/100)).toFixed(2)}%</td>
        </tr>
        `
    };
    html +=`
    </table>
    `;
    tabla3.innerHTML = html;
}