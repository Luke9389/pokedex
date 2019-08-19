import Component from '../../Component.js';
import { Paging } from './Paging.js';
import { Clear } from './Clear.js';

export class SideNav extends Component {
    renderHTML() {
        return /*html*/`
            <div>
                <img id="pokeball-icon" src="./assets/img/pokeballs/pokeball.png" alt="pokeball icon">
                <ul id="side-nav">
                    <li class="side-nav-item" id="sort-types-container">
                        <button id="filter-button">Filter</button>
                        <div id="sort-types" class="sort-types scrunch">
                            <a><img src="./assets/img/type-icons-circular/bug.png" alt="bug"></a>
                            <a><img src="./assets/img/type-icons-circular/dark.png" alt="dark"></a>
                            <a><img src="./assets/img/type-icons-circular/dragon.png" alt="dragon"></a>
                            <a><img src="./assets/img/type-icons-circular/electric.png" alt="electric"></a>
                            <a><img src="./assets/img/type-icons-circular/fairy.png" alt="fairy"></a>
                            <a><img src="./assets/img/type-icons-circular/fighting.png" alt="fighting"></a>
                            <a><img src="./assets/img/type-icons-circular/fire.png" alt="fire"></a>
                            <a><img src="./assets/img/type-icons-circular/flying.png" alt="flying"></a>
                            <a><img src="./assets/img/type-icons-circular/ghost.png" alt="ghost"></a>
                            <a><img src="./assets/img/type-icons-circular/grass.png" alt="grass"></a>
                            <a><img src="./assets/img/type-icons-circular/ground.png" alt="ground"></a>
                            <a><img src="./assets/img/type-icons-circular/ice.png" alt="ice"></a>
                            <a><img src="./assets/img/type-icons-circular/normal.png" alt="normal"></a>
                            <a><img src="./assets/img/type-icons-circular/poison.png" alt="poison"></a>
                            <a><img src="./assets/img/type-icons-circular/psychic.png" alt="psychic"></a>
                            <a><img src="./assets/img/type-icons-circular/rock.png" alt="rock"></a>
                            <a><img src="./assets/img/type-icons-circular/steel.png" alt="steel"></a>
                            <a><img src="./assets/img/type-icons-circular/water.png" alt="water"></a>
                        </div>
                    </li>
                </ul>
            </div>
        `;
    }

    onRender(dom) {

        const filterButton = dom.querySelector('#filter-button');
        
        function spinBall() {
            const sideNavPokeball = dom.querySelector('#pokeball-icon');
            sideNavPokeball.classList.remove('spin');
            void sideNavPokeball.offsetWidth;
            sideNavPokeball.classList.add('spin');
        }
        
        filterButton.addEventListener('click', () => {
            spinBall();

            const sortTypesDisplay = dom.querySelector('#sort-types');
            sortTypesDisplay.classList.toggle('scrunch');
        });

        const pagingProps = {
            totalCards: this.props.totalCards,
            currentPage: this.props.currentPage,
            spin: spinBall
        };

        const paging = new Paging(pagingProps);
        const sideNav = dom.querySelector('#side-nav');
        sideNav.appendChild(paging.renderDOM());

        const clear = new Clear();
        sideNav.appendChild(clear.renderDOM());
    }
}
