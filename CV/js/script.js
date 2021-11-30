const body = document.body;
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