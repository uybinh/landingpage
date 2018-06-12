function changeSize(){
  let imgs = document.querySelectorAll(".gallery img");
  imgs.forEach(function(img, i){
      if (i !== 0) {
        img.style.height = `${imgs[0].clientHeight}px`;
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


function loadMyScript(){
  changeSize();
  addLinkEvents();
  document.querySelector('.menu-button')
          .addEventListener("click", openNav);
  document.querySelector(".navbar-nav span")
          .addEventListener("click", closeNav);
}

window.onload = loadMyScript;
window.addEventListener('resize', changeSize);
