const filterButton = document.getElementById('filter-button');
const sortTypesDisplay = document.getElementById('sort-types');
const sideNavPokeball = document.getElementById('pokeball-icon');

filterButton.addEventListener('click', () => {
    sideNavPokeball.classList.remove('spin');
    void sideNavPokeball.offsetWidth;
    sideNavPokeball.classList.add('spin');
    if(sortTypesDisplay.classList.contains('hidden')) {
        sortTypesDisplay.classList.remove('hidden');
    } else { sortTypesDisplay.classList.add('hidden'); }
});

