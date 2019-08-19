import Component from '../../Component.js';
import { Header } from './Header.js';
import { DisplayGrid } from '../DisplayGrid/DisplayGrid.js';
import { SideNav } from '../SideNav/SideNav.js';
import { getHeroPokemon } from '../../services/get-hero-pokemon.js';
import hashStorage from '../../services/hash-storage.js';


export class App extends Component {
    renderHTML() {
        return /*html*/ `
            <div>
                <main>
                    <section id="card-display-section"></section>
                    <section id="side-nav-container"></section>
                </main>
            </div>
        `;
    }

    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const displayGridProps = {
            pokemon: []
        };

        loadHeroPokemon();
        const displayGrid = new DisplayGrid(displayGridProps);
        const displayGridSection = dom.querySelector('#card-display-section');
        displayGridSection.appendChild(displayGrid.renderDOM());


        const sideNav = new SideNav();
        const sideNavSection = dom.querySelector('#side-nav-container');
        sideNavSection.appendChild(sideNav.renderDOM());

        function loadHeroPokemon() {
            const settings = hashStorage.get();
            getHeroPokemon(settings)
                .then(data => {
                    const pokemon = data.results;
                    const totalCards = data.count;
                    displayGrid.update({ pokemon: pokemon });
                    sideNav.update({
                        totalCards: +totalCards,
                        currentPage: +settings.page || 1
                    });
                });
        }

        window.addEventListener('hashchange', () => {
            loadHeroPokemon();
        });
    }


}
