// start sidebar
const sidebar = document.querySelector('.sidebar');
const navItems = document.querySelectorAll('nav .nav-item');
const toggle = document.querySelector('.sidebar .toggle');

toggle.addEventListener('click', () => {

    if (sidebar.className === 'sidebar')
        sidebar.classList.add('open');
    else
        sidebar.classList.remove('open');

});

navItems.forEach(navItem => {

    navItem.addEventListener('click', () => {

        navItems.forEach(navItem => {
            navItem.classList.remove('active');
        });

        navItem.classList.add('active');

    });

});
// end sidebar 


// start about me
const about = document.querySelector('.left');
const about2 = document.querySelector('.kanan');
const btnClose = document.querySelector('.close');

function muncul (){
    document.getElementById("about").style.display = "block";
    document.getElementById("about2").style.display = "block";
}

function hilang (){
    document.getElementById("about").style.display = "none";
    document.getElementById("about2").style.display = "none";
}

// end about me

// start slider
let index = 1;

const moveTo = e => {
    showSlide(index = e)
}

const changeSlide = e => {
    showSlide(index += e)
}

const showSlide = e => {

    const images = document.querySelectorAll('.slider-item');
    const indicators = document.querySelectorAll('.slider-indicators span');
    const contents = document.querySelectorAll('.slider-content h3');

    (e > images.length) ? (index = 1) : null;
    (e < 1) ? (index = images.length) : null;

    for (let image of images) {
        image.style.opacity = '0';
    }

    for (let indicator of indicators) {
        indicator.style.width = '8px';
        indicator.style.background = '#ffffffaf';
    }

    for (let content of contents) {
        content.style.scale = '0';
        content.style.opacity = '0';
        content.style.transitionDelay = '.2s';
    }

    images[index - 1].style.opacity = '1';
    indicators[index - 1].style.width = '26px';
    indicators[index - 1].style.background = '#fff';
    contents[index - 1].style.scale = '1';
    contents[index - 1].style.opacity = '1';

}

showSlide();
// end slider