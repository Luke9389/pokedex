import Component from '../../Component.js';
import { Search } from './Search.js';

export class Header extends Component {
    renderHTML() {
        return /*html*/ `
            <header>
                <img id="pokedex-lense" src="./assets/img/pokedex/pokedex-lense.png"
                    alt="pokedex lense">
                <h1>Pokedex!</h1>
                <div id="search-bar-container">
                    <input id="search-bar" disabled type="text" placeholder="Search">
                    <button id="reveal-search-button">
                        <img id="search-icon" src="./assets/img/search-icon.png" alt="search">
                    </button>     
                </div>
            </header>
        `;
    }

    onRender(dom) {
        const searchBar = new Search();
        dom.appendChild(searchBar.renderDOM());
    }
}