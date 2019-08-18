import Component from '../../Component.js';
import { renderPokemonCard } from './renderPokemonCard.js';

export class PokemonCard extends Component {
    renderHTML() {
        return renderPokemonCard(this.props);
    }


}