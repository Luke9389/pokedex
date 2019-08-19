import Component from '../../Component.js';
import hashStorage from '../../services/hash-storage.js';

export class Paging extends Component {
    renderHTML() {
        const currentPage = this.props.currentPage;

        return /*html*/ `
            <li class="side-nav-item" id="paging-container">
                <button id="page-reveal-button">Page</button>
                <div id="page-button-container" class="scrunch">
                    <button id="page-back" class="hidden" ${currentPage === 1 ? 'disabled' : '' }>◀</button>
                    <p id="page-display" class="hidden">1</p>
                    <button id="page-forward" class="hidden">▶</button>
                </div>
            </li>
        `;
    }

    onRender(dom) {
        const pageBack = dom.querySelector('#page-back');
        const pageDisplay = dom.querySelector('#page-display');
        const pageForward = dom.querySelector('#page-forward');

        const currentPage = this.props.currentPage || 1;

        pageDisplay.textContent = currentPage;

        function updatePage(increment) {
            hashStorage.set({ page: currentPage + increment });
        }

        pageBack.addEventListener('click', () => {
            updatePage(-1);
        });
        pageForward.addEventListener('click', () => {
            updatePage(1);
        });

        const pageRevealButton = dom.querySelector('#page-reveal-button');
        
        pageRevealButton.addEventListener('click', ()=> {
            const spinBall = this.props.spin;
            spinBall();
            const sortTypesDisplay = dom.querySelector('#page-button-container');
            sortTypesDisplay.classList.toggle('scrunch');
            pageBack.classList.toggle('hidden');
            pageForward.classList.toggle('hidden');
            pageDisplay.classList.toggle('hidden');
        });
    }
}