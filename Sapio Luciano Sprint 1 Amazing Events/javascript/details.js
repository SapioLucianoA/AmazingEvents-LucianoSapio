console.log(data)
let parametro = location.search;

let params = new URLSearchParams(parametro);

let idEvento = params.get("parametro");
 
let evento = data.events.find(evento => evento._id === idEvento)



console.log(evento)

let divofdetail = document.getElementById(`divofDetails`)

function crearDetalles(elemento, objetoevento){
        let asistencia;
        let asistenciaTexto;
      
        if (objetoevento.assistance) {
          asistencia = objetoevento.assistance;
          asistenciaTexto = 'Assistance:';
        } else {
          asistencia = objetoevento.estimate;
          asistenciaTexto = 'Estimate:';
        }
    elemento.innerHTML += `


<img src="${objetoevento.image}" alt="prueba-de-details" class="img-detail">
        <div class="div-details">
            <h4 id="details-tittle">
            ${objetoevento.name}
            </h4>
            <div class="d-flex">
                <p class="fw-bold">Date:</p>
                <p> ${objetoevento.date}</p>
            </div>
            <div class="d-flex">
                <p class="fw-bold">Description:</p>
                <p> ${objetoevento.description}</p>
            </div>
            <div class="d-flex">
                <p class="fw-bold">category: </p>
                <p>${objetoevento.category}</p>
            </div>
            <div class="d-flex">
                <p class="fw-bold">Place:</p>
                <p> ${objetoevento.place}</p>
            </div>
            <div class="d-flex">
                <p class="fw-bold">Capacity:</p>
                <p> ${objetoevento.capacity} </p>
            </div>
            <div class="d-flex">
                <p class="fw-bold">>${asistenciaTexto}</p>
                <p>  ${asistencia}</p>
            </div>
            <div class="d-flex">
                <p class="fw-bold">Price:</p>
                <p> $${objetoevento.price}</p>
            </div>
        </div>`
    }

crearDetalles (divofdetail, evento)