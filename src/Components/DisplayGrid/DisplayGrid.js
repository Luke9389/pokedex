import Component from '../../Component.js';
// import { dummyPokeData } from '../../util/dummyPokeData.js';
import { PokemonCard } from '../PokemonCard/PokemonCard.js';


export class DisplayGrid extends Component {
    renderHTML() {
        return /*html*/ `
            <ul id="card-display-list">
            </ul>
        `;
    }

    onRender(dom) {
        const pokeProps = this.props.pokemon;

        pokeProps.forEach(pokemon => {
            const props = { pokemon: pokemon };
            const pokemonCard = new PokemonCard(props);
            dom.appendChild(pokemonCard.renderDOM());
        });
    }
}
