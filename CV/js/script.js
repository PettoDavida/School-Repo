const nav = document.querySelector('nav');
const fixed = 'fixed';
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= 0) {
        nav.classList.remove(fixed);
        return;
    }

    if (currentScroll > lastScroll) {
        // down
        nav.classList.remove(fixed);
    } else if (currentScroll < lastScroll ) {
        // up
        nav.classList.add(fixed);        
    }
    lastScroll = currentScroll;
});

let url = document.location.pathname;

let om_mig = document.querySelector('#om-mig');
let intressen = document.querySelector('#intressen');
let erfarenheter = document.querySelector('#erfarenheter');


switch (url) {
    case "/index.html":
        om_mig.style.borderColor = "white";
        break;

    case "/erfarenheter.html":
        erfarenheter.style.borderColor = "white";
        break;

    case "/intressen.html":
        intressen.style.borderColor = "white";
        break;
            
    default:
        break;
}



VANTA.BIRDS({
    el: "main",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00
  })