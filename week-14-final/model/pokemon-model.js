async function fetchPokemon() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/jolteon");
    if (!response.ok) {
        const message = `An error has occurred: ${response.status}`;
        throw new Error(message);
    }
    const data = await response.json();
    console.log(data);
    return data;
}

fetchPokemon();
