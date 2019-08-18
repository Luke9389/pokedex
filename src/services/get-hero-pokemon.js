const url = 'https://alchemy-pokedex.herokuapp.com/api/pokedex?sort=_id';

export function getHeroPokemon() {
    return fetch(url)
        .then(response => response.json());

}