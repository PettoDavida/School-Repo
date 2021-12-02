
// makes navbar visible when you scroll up by comparing y positions of where you are and where you were. 
// if y becomes smaller you will see the navbar and if y becomes bigger it will disappear
const nav = document.querySelector('nav');
const fixed = 'fixed';
/**
 * location of lastscroll
 */
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


/**
 * Makes it easier to see where you are on the site by giving the navbar item a white border on the bottom
 */
function navbarLocation() {
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
            om_mig.style.borderColor = "white";
            break;
    }
}


/**
 * fun interactive bird background implemented with the help of vanta and three.js
 */
function birdBackground() {
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
}

window.addEventListener('load', (event) => {
    birdBackground();
    navbarLocation();
  });


  let vid1 = document.querySelector('#video1');
  

  function playVid() {
      vid1.play();
  }

  function pauseVid() {
      vid1.pause();
  }

  Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
    get: function(){
        return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
    }
    })

  function vidControls() {
      if (vid1.playing) {
          pauseVid();
      } else {
          playVid();
      }
  }

