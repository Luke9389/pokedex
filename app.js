const filterButton = document.getElementById('filter-button');
const sortTypesDisplay = document.getElementById('sort-types');
const sideNavPokeball = document.getElementById('pokeball-icon');
const searchButton = document.getElementById('reveal-search-button');
const searchBar = document.getElementById('search-bar');
const searchBarContainer = document.getElementById('search-bar-container');

searchButton.addEventListener('click', () => {
    searchBarContainer.classList.toggle('long');

    searchBar.toggleAttribute('disabled');
    searchBar.classList.toggle('opaque');


});


filterButton.addEventListener('click', () => {
    sideNavPokeball.classList.remove('spin');
    void sideNavPokeball.offsetWidth;
    sideNavPokeball.classList.add('spin');

    sortTypesDisplay.classList.toggle('scrunch');
});

