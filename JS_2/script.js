const navBar = document.getElementById("nav-bar");
const mainContent = document.getElementById("main-content");


function getUniqueTypes() {
    const uniqueTypes = new Set();
    pokedex.forEach(pokemon => {
        pokemon.type.forEach(type => uniqueTypes.add(type));
    });
    return [...uniqueTypes];
}


function calculateTotalStats(type) {
    const typePokemons = pokedex.filter(pokemon => pokemon.type.includes(type));
    const totalHP = typePokemons.reduce((total, pokemon) => total + pokemon.base.HP, 0);
    const totalAttack = typePokemons.reduce((total, pokemon) => total + pokemon.base.Attack, 0);
    return { totalHP, totalAttack };
}


function createPokemonCard(pokemon) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <img src="${pokemon.sprite}" alt="${pokemon.name}">
        <h2>${pokemon.name}</h2>
        <p><span class="card-type">${pokemon.type.join(", ")}</span></p>
        <p>HP: ${pokemon.base.HP}</p>
        <p>Attack: ${pokemon.base.Attack}</p>
        <p>Defense: ${pokemon.base.Defense}</p>
        <p>Sp. Attack: ${pokemon.base.Attack}</p>
        <p>Sp. Defense: ${pokemon.base.Defense}</p>

        <p>Speed: ${pokemon.base.Speed}</p>
        <div class="card-link">
            <a href="${pokemon.url}" target="_blank">Details</a>
        </div>
    `;
    return card;
}


function createNavLinks(types) {
    types.forEach(type => {
        const link = document.createElement("a");
        link.href = `#${type}`;
        link.textContent = type;
        navBar.appendChild(link);
    });
}


function createPokedex() {
    const types = getUniqueTypes();
    createNavLinks(types);

    types.forEach(type => {
        const { totalHP, totalAttack } = calculateTotalStats(type);
        let typePokemons = pokedex.filter(pokemon => pokemon.type.includes(type));


        const section = document.createElement("section");
        section.id = type;

        const heading = document.createElement("h2");
        heading.textContent = type;
        section.appendChild(heading);

        const typeStats = document.createElement("p");
        typeStats.textContent = `Total Pokémon: ${typePokemons.length} | Total HP: ${totalHP} | Total Attack: ${totalAttack}`;
        section.appendChild(typeStats);


        typePokemons.sort((a, b) => a.name.localeCompare(b.name));


        typePokemons.forEach(pokemon => {
            section.appendChild(createPokemonCard(pokemon));
        });

        mainContent.appendChild(section);
    });
}


createPokedex();

