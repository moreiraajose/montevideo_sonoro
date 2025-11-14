gsap.registerPlugin(ScrollTrigger)




console.clear();

select = e => document.querySelector(e);
// selectAll = e => document.querySelectorAll(e);

const container = select('.container');
// const bandText = new SplitText('.band', {type:"chars", charsClass:"char" });
let master = gsap.timeline({ delay: 0.5 });

function animateCircles() {
    let tl = gsap.timeline();
    tl.from('.circles circle', {
        // y: 800,
        ease: 'expo',
        duration: 4,
        stagger: {
            each: -0.15
        }
    })
        .from('.circles circle', {
            scale: 0.5,
            ease: 'back(4)',
            duration: 1.47,
            stagger: {
                each: -0.06,
                repeat: -1,
                yoyo: true
            },
            transformOrigin: 'center center'
        }, 0.5)

    return tl;
}

function resize() {
    let vh = window.innerHeight;
    let sh = container.offsetHeight;
    let scaleFactor = vh / sh;
    if (scaleFactor < 1) {
        gsap.set(container, { scale: scaleFactor });
    }
    else {
        gsap.set(container, { scale: 1 });
    }
}

function init() {
    gsap.set(container, { autoAlpha: 1 });
    resize();
    master.add(animateCircles());
    container.onclick = () => {
        master.restart();
    }
}

window.onresize = resize;

window.onload = () => {
    init();
};




////
let sections = gsap.utils.toArray(".fact");
gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
      trigger: ".factsContainer_sm",
      pin: true,
      scrub: 1,
      snap: 1 / (sections.length - 1),
      end: () => "+=" + document.querySelector(".factsContainer_sm").offsetWidth
    }
  });
  