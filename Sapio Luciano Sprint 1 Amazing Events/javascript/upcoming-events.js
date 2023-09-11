
let divOfCards = document.getElementById("divOfCards");
let divofcheckboxs = document.getElementById("checkbox");
const currentDate = new Date(data.currentDate);


console.log(currentDate)

let eventosEnArray = []

function filtradorafutura(){
  let filtraciones = data.events.filter(evento => new Date (evento.date) > currentDate)
  eventosEnArray = filtraciones
}
filtradorafutura(data);

// CHECKBOXS

let categoriasAgregadas = {}
function creadorDeCheckbox(array){
  for (let event of array) {
    if (!categoriasAgregadas[event.category]) {
      divofcheckboxs.innerHTML += `
        <div class="form-check">
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
creadorDeCheckbox(eventosEnArray)



function filtroDeCards() {
  let checkboxMarcados = document.querySelectorAll('input[type=checkbox]:checked');


  let valoresMarcados = Array.from(checkboxMarcados).map(checkbox => checkbox.value);


  let eventosFiltrados = eventosEnArray.filter(evento => valoresMarcados.includes(evento.category));


  if (valoresMarcados.length === 0) {
    eventosFiltrados = eventosEnArray;
  }
  creadorDeCards(eventosFiltrados);
}
let inputOfCheckboxs = document.querySelectorAll('input[type=checkbox]');

inputOfCheckboxs.forEach(checkbox => checkbox.addEventListener('change', filtroDeCards));

// CARDS 

function creadorDeCards(array){
  divOfCards.innerHTML =``;
  for (let event of array){
  
    divOfCards.innerHTML += `
  <div class="block-card">
    <img src="${event.image}" alt="${event.name}" class="img-card">
    <div class="card-text-tittle">
      <h3> ${event.name} </h3>
      <p>${event.description}</p>
      <div class="card-button-and-text">
        <p>Price: $${event.price}</p>
        <a href="./Details.html?parametro=${event._id}" class="a-cards">Details</a>
      </div>
    </div>
  </div>
  `
  }
  }

  creadorDeCards(eventosEnArray)
  // BUSCADOR
  const searchInput = document.querySelector('#search');

  searchInput.addEventListener('input', e => {
    const searchValue = searchInput.value.toLowerCase();
  
    document.querySelectorAll('.block-card').forEach(card => {
      card.textContent.toLowerCase().includes(searchValue)
        ? card.classList.remove('filter')
        : card.classList.add('filter');
    });
  });
  // prevenircarga
form.addEventListener('submit', function(e) {
  e.preventDefault();
});