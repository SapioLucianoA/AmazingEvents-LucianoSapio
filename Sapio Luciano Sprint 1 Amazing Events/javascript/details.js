let parametro = location.search;

let params = new URLSearchParams(parametro);

let idEvento = params.get("parametro");

fetch(`https://mindhub-xj03.onrender.com/api/amazing`)
  .then(response => response.json())
  .then(data => {
    console.log(data)
     let evento = data.events.find(evento => String(evento._id) === String(idEvento));
    console.log(evento);

    crearDetalles (divofdetail, evento)
  })
  .catch(err => console.log(err));


  
      

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


<img src="${objetoevento.image}" alt="prueba-de-details" class="img-detail rounded-start">
        <div class="div-details ps-2">
            <h4 class="text-center" id="details-tittle">${objetoevento.name}</h4>
            <div class="d-flex">
                <p class="fw-bold">* Date:</p>
                <p class="ms-2" >${objetoevento.date}</p>
            </div>
            <div class="d-flex">
                <p class="fw-bold">* Description:</p>
                <p class="ms-2" >${objetoevento.description}</p>
            </div>
            <div class="d-flex">
                <p class="fw-bold">* Category: </p>
                <p class="ms-2" >${objetoevento.category}</p>
            </div>
            <div class="d-flex">
                <p class="fw-bold">* Place:</p>
                <p class="ms-2" >${objetoevento.place}</p>
            </div>
            <div class="d-flex">
                <p class="fw-bold">* Capacity:</p>
                <p class="ms-2" >${objetoevento.capacity} </p>
            </div>
            <div class="d-flex">
                <p class="fw-bold">* ${asistenciaTexto}</p>
                <p class="ms-2" >${asistencia}</p>
            </div>
            <div class="d-flex">
                <p class="fw-bold">* Price:</p>
                <p class="ms-2">$${objetoevento.price}</p>
            </div>
        </div>`
    }

