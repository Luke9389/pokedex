import Component from '../../Component.js';

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
        const searchButton = dom.querySelector('#reveal-search-button');
        searchButton.addEventListener('click', () => {
            const searchBarContainer = dom.querySelector('#search-bar-container');
            searchBarContainer.classList.toggle('long');

            const searchBar = dom.querySelector('#search-bar');
            searchBar.toggleAttribute('disabled');
            searchBar.classList.toggle('opaque');
        });
    }
}