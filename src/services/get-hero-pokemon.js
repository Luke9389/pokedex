const apiUrl = 'https://alchemy-pokedex.herokuapp.com/api/pokedex?sort=id';

export function getHeroPokemon(settings) {

    const page = settings.page || 1; 
    const search = settings.pokemon || '';
    const url = `${apiUrl}&page=${page}&pokemon=${search}`;
    
    return fetch(url)
        .then(response => response.json());

}