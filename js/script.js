
const nav = document.querySelector('nav');
const fixed = 'fixed';
const url = document.location.pathname;
/**
 * location of lastscroll
 */
let lastScroll = 0;

// makes navbar visible when you scroll up by comparing y positions of where you are and where you were. 
// if y becomes smaller you will see the navbar and if y becomes bigger it will disappear
function scrollNav() {
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
}

window.addEventListener('scroll', () => {
    scrollNav();
});


/**
 * Makes it easier to see what page you are on by giving the navbar item a white border on the bottom
 */
function navbarLocation() {
    
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

  
/**
 * plays video
 * @param {HTMLVideoElement} vid element that the function plays
 */
  function playVid(vid) {
      vid.play();
  }
/**
 * pauses video
 * @param {HTMLVideoElement} vid element that the function pauses
 */
  function pauseVid(vid) {
      vid.pause();
  }

  Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
    get: function(){
        return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
    }
    })
/**
 * makes video playable and pauseable by just clicking on the video 
 * @param {string} video the id of the video that needs controls written in the format of '#(name)'
 */
  function vidControls(video) {
    let vidElement = document.querySelector(video);
      if (vidElement.playing) {
          pauseVid(vidElement);
      } else {
          playVid(vidElement);
      }
  }



  window.addEventListener('load', (event) => {
    scrollNav();
    navbarLocation();

    if (url !== "/erfarenheter.html") {
        birdBackground();
    } 
    
  });
