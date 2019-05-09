document.getElementById('menu').addEventListener('click', showMenu);

function showMenu() {
    var navMenu = document.getElementById('hidden');
    navMenu.classList.remove('hidden');
};

document.getElementById('hidden').addEventListener('click', hideMenu);

function hideMenu() {
    var navMenu = document.getElementById('hidden');
    navMenu.classList.add('hidden');
}

