$(document).ready(function () {
  var bars = $('.menu-bar');
  var menu = $('#menu');
  var menu_nav = $('.menu-nav');
  var menuButton = $('.menu-button');
  var timeline = gsap.timeline({ paused:true });
  var open = false;
  
  menu.hide();

  timeline

  
  .to(menu.find('a'), 0.4, {
    autoAlpha: 0
  })

  .to(bars[0], 0.1, {
    top: '5px',
    rotation: 45,
  }, 0)
  .to(bars[1], 0.1, {
    opacity: 0
  }, 0)
  .to(bars[2], 0.1, {
    top: '-7px',
    rotation: -45,
  }, 0)

  .to(menu, 1, {
    height: '100%',
    width: '300',
    autoAlpha:1,
  }, '-=0.5')



  .to('.menu-nav a', {
    duration:0.2,
    autoAlpha: 1,
    stagger:0.2,
    ease: Expo.easeInOut 
  }, "-=0.5");
  
  
  menuButton.on('click', function () { 
    $(this).toggleClass('active');
    if (open) {
      timeline.reverse();
      open = false;
    } else {
      menu.show();
      timeline.play();
      open = true;
    }
  });
  
  menu.find('a').on('click', function () {
    timeline.reverse();
  });
});
