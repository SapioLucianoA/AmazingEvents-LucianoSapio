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

        //tabla pasados datos
        arraydecategorias = ordenarPorCategoria(arrayDeAssists, "assistance", "price")

        // console.log(arraydecategorias)

        sumas = sumarDatos(arraydecategorias)
        console.log(sumas)
        //tabla pasados creador
        
        tabla2creator(sumas)

        // datos yabla futura
        let arraydeEstimated = []
        filtroestimate(data, "estimate", arraydeEstimated)

        // console.log(arraydeEstimated)

        estimacion = ordenarPorCategoria(arraydeEstimated, "estimate", "price")

        // console.log(estimacion)

        sumacion = sumarDatos(estimacion)

         console.log(sumacion)

        tabla3creator(sumacion)




    })
    .catch(error => console.log(error))

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
        tabla += `<td class ="text-center fw-bold">${array1[i].name}: ${(array1[i][element1]/(array1[i][element2]/100)).toFixed(2)}%</td>`;
        // me olvide de tofixear esto en el github
    }
    
    for (let i = 0; i < array2.length; i++) {
        tabla += `<td class= "text-center fw-bold">${array2[i].name}- Capacity: ${array2[i][element2]}</td>`;
    }
    
    tabla += `</tr></table>`;
    
    position.innerHTML = tabla;
    }

// manejo de datos tabla 2 (pasado)

function sumarDatos(arrays) {
  return arrays.map(array => {
      return array.reduce((acumulador, objeto) => {
          // Si el objeto no tiene la propiedad 'assistance', se usa 'estimate'
          let assistance = objeto.assistance || objeto.estimate;
          // Sumamos las propiedades al acumulador
          acumulador.capacity += objeto.capacity;
          acumulador.assistance += assistance;
          // Añadimos la categoría y el precio
          acumulador.category = objeto.category;
          // Calculamos la recaudación de este objeto y la sumamos al acumulador
          let recaudacion = assistance * objeto.price;
          acumulador.recaudacion += recaudacion;
          return acumulador;
      }, {capacity: 0, assistance: 0, recaudacion: 0}); // Inicializamos el acumulador con 0
  });
}




// estimate and price
function ordenarPorCategoria (array, elemento1, elemento2){
    // Primero, creamos un objeto para almacenar los eventos por categoría
    let categorias = {};

    // iteramos sobre cada evento
    for (let evento of array) {
        if (evento.hasOwnProperty(elemento1) && evento.hasOwnProperty(elemento2)) {
            evento.ganancia = evento[elemento1] * evento[elemento2];
            
        }
        if (!categorias.hasOwnProperty(evento.category)) {
            categorias[evento.category] = [];
        }
        categorias[evento.category].push(evento);
    }

    // Convertimos los valores del objeto a un array y lo devolvemos
    return Object.values(categorias);
    }

    function filtracion(array, element1, element2){
        let filtro = array.events.filter(evento => evento.hasOwnProperty(element1) && evento.category === element2);
return filtro;
    }



    function filtroAssit(array, element, arrayDeAssists){
      let filtro = array.events.filter(evento => evento.hasOwnProperty(element))
      arrayDeAssists.push(...filtro)
  }


// creador tabla2
    const tabla2 = document.getElementById("tabla-2")
    function tabla2creator(array){
    let tablados = `
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
        tablados +=`
        <tr>
          <td class="text-center fw-bold" >${events.category}</td>
          <td class="text-center fw-bold" >$ ${events.recaudacion}</td>
          <td class="text-center fw-bold" >${(events.assistance/(events.capacity/100)).toFixed(2)}%</td>
        </tr>
        `
    };
    tablados +=`
    </table>
    `;
    tabla2.innerHTML = tablados;
    }

    // manejo de dato tabla 3 (future)
    function filtroestimate(array, element, array2){
      let filtro = array.events.filter(evento => evento.hasOwnProperty(element))
      array2.push(...filtro)
  }


  const tabla3 = document.getElementById("tabla-3")
    function tabla3creator(array){
    let tablatres = `
    <table class="w-100">
    <tr>
      <th colspan="3">
        <p class="fs-5 fw-bold text-center">Upcoming events statistics by category</p>
      </th>
    </tr>
    <tr>
      <td class="text-center fw-bold">categories</td>
      <td class="text-center fw-bold" >Revenues</td>
      <td class="text-center fw-bold" >Porcentage of estimate</td>
    </tr>
    `;
    for (let events of array){
        tablatres +=`
        <tr>
          <td class="text-center fw-bold" >${events.category}</td>
          <td class="text-center fw-bold" >$ ${events.recaudacion}</td>
          <td class="text-center fw-bold" >${(events.assistance/(events.capacity/100)).toFixed(2)}%</td>
        </tr>
        `
    };
    tablatres +=`
    </table>
    `;
    tabla3.innerHTML = tablatres;
    }