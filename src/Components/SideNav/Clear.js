import Component from '../../Component.js';
import hashStorage from '../../services/hash-storage.js';

export class Clear extends Component {
    renderHTML() {
        return /*html*/ `
            <li class="side-nav-item">
                <button id="clear-button">Clear</button>
            </li>
        `;
    }
    onRender(dom) {
        const clearButton = dom.querySelector('#clear-button');

        clearButton.addEventListener('click', () => { 
            const settings = hashStorage.get();
            console.log(settings);
            Object.keys(settings).forEach(key => {
                hashStorage.remove(key);
            });
        });
    }

}