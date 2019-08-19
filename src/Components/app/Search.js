import Component from '../../Component.js';
import hashStorage from '../../services/hash-storage.js';

export class Search extends Component {
    renderHTML() {
        return /*html*/ `
            <div id="search-bar-container">
                <input id="search-bar" disabled type="text" placeholder="Search">
                <button id="reveal-search-button">
                    <img id="search-icon" src="./assets/img/search-icon.png" alt="search">
                </button> 
            </div>
        `;
    }

    onRender(dom) {
        const searchBarContainer = dom;
        const searchBar = dom.querySelector('#search-bar');
        const searchButton = dom.querySelector('#reveal-search-button');

        searchButton.addEventListener('click', () => {
            if(!searchBar.value) {
                searchBarContainer.classList.toggle('long');
                searchBar.toggleAttribute('disabled');
                searchBar.classList.toggle('opaque');
            } else {
                const search = searchBar.value;
                hashStorage.set({
                    pokemon: search.toLowerCase(),
                    page: 1
                });
            }
        });
    }
}