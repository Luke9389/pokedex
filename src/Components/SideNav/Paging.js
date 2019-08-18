import Component from '../../Component.js';

export class Paging extends Component{
    renderHTML(){
        return /*html*/ `
            <li class="side-nav-item" id="paging-container">
                <p>Page</p>
                <button class="page-back">◀</button>
                <button class="page-forward">▶</button>
            </li>
        `;
    }
}