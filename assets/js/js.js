/* -------------------------------------------------------------------------- */
/*                                aos animation                               */
/* -------------------------------------------------------------------------- */
AOS.init();

/* -------------------------------------------------------------------------- */
/*                                   loader                                   */
/* -------------------------------------------------------------------------- */
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  document.body.style.overflow = "hidden";
  setTimeout(() => {
    document.body.style.overflow = "auto";
    loader.style.opacity -= .1;
  }, 2000);
  setTimeout(() => {
    loader.style.display = 'none';
  }, 2500);

});
/* -------------------------------------------------------------------------- */
/*                              add class active                              */
/* -------------------------------------------------------------------------- */

let add_acative = document.querySelectorAll(".navbar-nav a");

for (var i = 0; i < add_acative.length; ++i) {
  add_acative[i].addEventListener("click", function () {

    [].forEach.call(add_acative, function (element) {
      element.classList.remove("active");
    });
    this.classList.add("active");
  });
}

/* -------------------------------------------------------------------------- */
/*                                  Scrollto                                  */
/* -------------------------------------------------------------------------- */

class ScrollTo {
  constructor() {
    //select all element have class scroll to
    this.links = document.querySelectorAll('.scroll-to');

    this.document = document.documentElement || document.body;

    //add when error show 
    // if (this.links.length < 1) {
    //   return;
    // }

    this.init();
  }

  init() {
    //lop for every lonk in linkes when we run the same code over and over again, each time with a different value
    for (let link of this.links) {
      this.singleLinkController(link);
    }
  }

  singleLinkController(link) {
    //get dataset in this link run
    let scrollToElem = document.querySelector(link.dataset.target);
    link.addEventListener('click', (e) => {
      //preventDefault=> stop propagation  
      e.preventDefault();
      this.clickEvent(link, scrollToElem);
    });
  }

  clickEvent(link, scrollToElem) {
    const offset = parseInt(link.dataset.offset) || 0;

    gsap.to(this.document, {
      duration: 1,
      scrollTop: scrollToElem.offsetTop + offset,
      ease: "power3.ease-out"
    })
  }

}

new ScrollTo();


/* -------------------------------------------------------------------------- */
/*                                 pack-to-top                                */
/* -------------------------------------------------------------------------- */
const scrollToTopButton = document.getElementById('pack-to-top');

// if we scroll aftter the height of the initial window.
const scrollwindow = () => {
  // Get the current scroll value
  let y = window.scrollY;

  // when the scroll value > the window height will add class 
  if (y > 150) {
    scrollToTopButton.className = "top-link show";
  } else {
    scrollToTopButton.className = "top-link hide";
  }
};
window.addEventListener("scroll", scrollwindow);

const scrollToTop = () => {
  // pixels from the top of the document
  const pixelstop = document.documentElement.scrollTop || document.body.scrollTop;

  if (pixelstop > 0) {
    // method tells the browser that you wish to perform an animation
    window.requestAnimationFrame(scrollToTop);

    window.scrollTo(0, pixelstop - pixelstop / 10);
  }
};

// When the button is clicked, run our ScrolltoTop function above!
scrollToTopButton.onclick = function (e) {
  e.preventDefault();
  scrollToTop();
}

/* -------------------------------------------------------------------------- */
/*                                  Animation                                 */
/* -------------------------------------------------------------------------- */
// gsap.fromTo(".from-left", {
//   scrollTrigger: {
//     trigger: ".left-card",
//     start: "top bottom",
//     end: "bottom top",
//     scrub: 1
//   },
//   x: -100
// }, {
//   scrollTrigger: {
//     trigger: ".left-card",
//     start: "top bottom",
//     end: "bottom top",
//     scrub: 1
//   },
//   x: 0
// })



















