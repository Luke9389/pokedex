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
        const searchBar = dom.querySelector('#search-bar');
        const searchButton = dom.querySelector('#reveal-search-button');

        searchButton.addEventListener('click', () => {
            const search = searchBar.value;
            console.log(search);
            hashStorage.set({
                search: search,
                page: 1
            });
        });
    }
}