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

document.getElementById('logo').addEventListener('click', goHome);

function goHome() { 
    window.location.assign('/portfolio.html');
};

var bio = document.getElementById('bioBtn');

if (bio) {
    bio.addEventListener('click', expandBio);
    function expandBio() {
        var expandedBioSection =  document.getElementById('hiddenBio');
        expandedBioSection.classList.toggle('hiddenBio');
    }
}

