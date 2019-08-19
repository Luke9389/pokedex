const apiUrl = 'https://alchemy-pokedex.herokuapp.com/api/pokedex?sort=id';

export function getHeroPokemon(settings) {

    const page = settings.page || 1; 

    const url = `${apiUrl}&page=${page}`;
    
    return fetch(url)
        .then(response => response.json());

}