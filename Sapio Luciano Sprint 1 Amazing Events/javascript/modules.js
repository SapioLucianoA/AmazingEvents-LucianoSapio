// array creador
let eventosEnArray =[] 
export  function creadordeEventosArray(array, eventosEnArray){
    
    for (let i=0; i<array.events.length; i++){
      let evento = array.events[i]
      eventosEnArray.push(evento)
    }
    return eventosEnArray
}

export function filtradoraPasada(array, fecha, eventosEnArray){
  let filtraciones = array.events.filter(evento => new Date (evento.date) < fecha)
  eventosEnArray.push(...filtraciones)
}

export function filtradorafutura(array, fecha, eventosEnArray){
  let filtraciones = array.events.filter(evento => new Date (evento.date) > fecha)
  eventosEnArray.push(...filtraciones)
}
// check box y filtro checkboxs
let divOfCards = document.getElementById("divOfCards");

let categoriasAgregadas = []
export function creadorDeCheckbox(array, categoriasAgregadas, divofcheckboxs){
    for (let event of array) {
      if (!categoriasAgregadas[event.category]) {
        divofcheckboxs.innerHTML += `
          <div class="form-check ms-4">
            <input class="form-check-input" type="checkbox" name="${event.name}" value="${event.category}">
            <label class="form-check-label font-color-AE font-label" for="${event.category}">
              ${event.category}
            </label>
          </div>
        `;
        categoriasAgregadas[event.category] = true;
      }
    }
  }

 export function filtroDeCards(eventosEnArray) {
    let checkboxMarcados = document.querySelectorAll('input[type=checkbox]:checked');
  
  
    let valoresMarcados = Array.from(checkboxMarcados).map(checkbox => checkbox.value);
  
  
    let eventosFiltrados = eventosEnArray.filter(evento => valoresMarcados.includes(evento.category));
  
  
    if (valoresMarcados.length === 0) {
      eventosFiltrados = eventosEnArray;
    }
    creadorDeCards(eventosFiltrados);
  }

// creador de cards
 export function creadorDeCards(array){
  divOfCards.innerHTML =``;
  for (let event of array){
  
    divOfCards.innerHTML += `
  <div class="block-card">
    <img src="${event.image}" alt="${event.name}" class="img-card">
    <div class="card-text-tittle">
      <h3> ${event.name} </h3>
      <p>${event.description}</p>
      <div class="card-button-and-text">
        <p class=" ">Price: $${event.price}</p>
        <a href="./Details.html?parametro=${event._id}" class="a-cards">Details</a>
      </div>
    </div>
  </div>
  `
  }
  }

    // past and upcoming


// buscador
const searchInput = document.querySelector('#search');
const errorMessage = document.getElementById('search-error-message');

searchInput.addEventListener('input', e => {
  const searchValue = searchInput.value.toLowerCase();
  let found = false; 

  document.querySelectorAll('.block-card').forEach(card => {
    if (card.textContent.toLowerCase().includes(searchValue)) {
      card.classList.remove('filter');
      found = true; 
    } else {
      card.classList.add('filter');
    }
  });


  if (!found) {
    errorMessage.style.display = 'block'; 
  } else {
    errorMessage.style.display = 'none'; 
  }
});

const form = document.querySelector('.search-bar');
form.addEventListener('submit', (e) => {
  e.preventDefault();
});



//   asdasdasdas
