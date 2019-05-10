document.getElementById('menu').addEventListener('click', showMenu);

function showMenu() {
    var navMenu = document.getElementById('hidden');
    navMenu.classList.remove('hidden');
};

document.getElementById('closeMenuBtn').addEventListener('click', closeMenu);

function closeMenu() {
    var navMenu = document.getElementById('hidden');
    navMenu.classList.add('hidden');
};

