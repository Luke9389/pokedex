import Component from '../../Component.js';
import { Header } from './Header.js';
import { DisplayGrid } from '../DisplayGrid/DisplayGrid.js';
import { SideNav } from '../SideNav/SideNav.js';
// import { dummyPokeData } from '../../util/dummyPokeData.js';

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


        const url = 'https://alchemy-pokedex.herokuapp.com/api/pokedex';

        fetch(url)
            .then(response => response.json())
            .then(data => {
                displayGrid.update({ pokemon: data.results });
                console.log(displayGridProps.pokemon);
            });


        const displayGrid = new DisplayGrid(displayGridProps);
        const displayGridSection = dom.querySelector('#card-display-section');
        displayGridSection.appendChild(displayGrid.renderDOM());


        const sideNav = new SideNav();
        const sideNavSection = dom.querySelector('#side-nav-container');
        sideNavSection.appendChild(sideNav.renderDOM());
    }


}
