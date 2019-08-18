import { dummyPokeData } from '../src/util/dummyPokeData.js';
import { renderPokemonCard } from '../src/Components/PokemonCard/renderPokemonCard.js';
import './html-equal.js';

const test = QUnit.test;

QUnit.module('Pokemon Card');

test('renders a pokemon card from API data', assert => {
    // arrange
    const expected = /*html*/ `
        <li class="card">
            <p class="pokemon-number">#187</p>
            <img class="card-image" src="http://assets.pokemon.com/assets/cms2/img/pokedex/full/172.png">
            <h2 class="pokemon-name">Pichu</h2>
            <ul class="pokemon-types">
                <li class="electric"></li>
            </ul>
        </li>
    `;

    const data = dummyPokeData[0];

    // act
    const results = renderPokemonCard(data);

    // assert
    assert.htmlEqual(results, expected);
});