const containerPokemons = document.querySelector("#pokemon-card");
const idPokemon = document.querySelector("#poke-id");
const nombrePokemon = document.querySelector("#poke-name");
const tipoPokemon = document.querySelector("#tipo-pokemon");

const mostrarPokemon = () =>{
    pokes.map(async (poke, index) => {
        //console.log(`${index+1} - ${poke.name}`)
        console.log(poke.type)
        const html = `
        <div class="col-md-2 col-sm-6 col-xs-6" >
        <div class="card pokemon-card mt-3">
            
            <button type="button" class="btn btn-primary" 
            data-bs-toggle="modal" 
            data-bs-target="#exampleModal" 
            onclick="showDetailPokemon(${poke.id})">
              <img src= ${poke.img} alt="">
            </button>
          </div>
          </div>
        `;

        containerPokemons.innerHTML += html;
    });
      
};
mostrarPokemon();

const showDetailPokemon = (id) => {
  const pokemon = pokes.find((poke) => poke.id === id);
  document.getElementById("poke-img").src= pokemon.img;
  idPokemon.innerHTML = pokemon.id;
  nombrePokemon.innerHTML = pokemon.name;
  //tipoPokemon.innerHTML = pokemon.type;
  const pokemonType = pokemon.type.map((item) => `<li>${item}</li>`)
  tipoPokemon.innerHTML = pokemonType
};




