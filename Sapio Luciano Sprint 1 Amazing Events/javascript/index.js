import { creadordeEventosArray, creadorDeCheckbox, filtroDeCards} from "./modules.js";
let divOfCards = document.getElementById("divOfCards");

let divofcheckboxs = document.getElementById("checkbox");

fetch(`https://mindhub-xj03.onrender.com/api/amazing`)
      .then(response => response.json())
      .then(data => { 
        // EVENTOS ARRAY
        let eventosEnArray = []
        creadordeEventosArray(data, eventosEnArray)
        
        // CREADOR DE CHECKBOX
        let categoriasAgregadas = []
        creadorDeCheckbox(eventosEnArray, categoriasAgregadas, divofcheckboxs)
        

        
        // FILTRADOR DE CHECKBOX
        filtroDeCards(eventosEnArray)
        
        let inputOfCheckboxs = document.querySelectorAll('input[type=checkbox]');
        inputOfCheckboxs.forEach(checkbox => checkbox.addEventListener('change', () => filtroDeCards(eventosEnArray)));
        


        // creador de cards
        creadorDeCards(eventosEnArray)

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
      })
      
      .catch(err => console.log(err))

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
              <p class=" ">Price: $${event.price}</p>
              <a href="./pages/Details.html?parametro=${event._id}" class="a-cards">Details</a>
            </div>
          </div>
        </div>
        `
        }
        }
