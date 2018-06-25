function changeSize(){
  let imgs = $(".gallery img");
  imgs.each(function(index){
      if (index !== 0) {
        this.style.height = `${imgs[0].clientHeight}px`;
      }
  })
}

function addLinkEvents(){
  $('a[href*="#"]')
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event){
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        // event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
    closeNav();
    changeMenuButton();
  });
}

function openNav() {
  $('.navbar-nav').toggleClass('show');
}

function closeNav(){
  if ($('.navbar-nav').hasClass('show')){
    $('.navbar-nav').toggleClass('show');
  }
}

function changeMenuButton(){
  $('.menu-button').toggleClass('change');
}

function loadMyScript(){
  changeSize();
  addLinkEvents();
  $('.menu-button').click(function(){
    changeMenuButton();
    openNav();
  })
}

$(document).ready(loadMyScript);
$("#tag-img").on("load", loadMyScript);;
$(window).resize(changeSize);