import { App } from './Components/app/App.js';

const root = document.getElementById('root');
const app = new App();
root.appendChild(app.renderDOM());