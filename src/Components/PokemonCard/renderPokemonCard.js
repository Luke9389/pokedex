
function idFormatter(number) {
    const singleDigit = /^\d{1}$/;
    const doubleDigit = /^\d{2}$/;
    const tripleDigit = /^\d{3}$/;
    if(singleDigit.test(number)) {
        return `00${number}`;
    } else if(doubleDigit.test(number)) {
        return `0${number}`;
    } else if(tripleDigit.test(number)) {
        return number;
    }
}

function capitalizeName(name) {
    const capped = name.charAt(0).toUpperCase() + name.slice(1);
    return capped;
}

function getTypes(data) {
    const listHead = /*html*/ `<ul class="pokemon-types">`;
    const firstTypeItem = /*html*/ ` <li class="${data.pokemon.type_1}"></li>`;
    const listEnd = /*html*/ ` </ul> </li>`;
    if(data.pokemon.type_2 !== 'NA') {
        const secondTypeItem = /*html*/ ` <li class="${data.pokemon.type_2}"></li>`;
        return `${listHead}${firstTypeItem}${secondTypeItem}${listEnd}`;
    } else {
        return `${listHead}${firstTypeItem}${listEnd}`;
    }

}

export function renderPokemonCard(data) {

    const card = /*html*/ `
            <li class="card">
                <p class="pokemon-number">#${idFormatter(data.pokemon.id)}</p>
                <img class="card-image" src="${data.pokemon.url_image}">
                <h2 class="pokemon-name">${capitalizeName(data.pokemon.pokemon)}</h2>
            ${getTypes(data)}
    `;
    return card;
}