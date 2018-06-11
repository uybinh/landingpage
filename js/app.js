function changeSize(){
  let imgs = document.querySelectorAll(".gallery img");
  imgs.forEach(function(img, i){
      if (i !== 0) {
        img.style.height = `${imgs[0].clientHeight}px`;
      }
  })
}

function openNav() {
  document.querySelector(".navbar-nav").style.width = "60vw";
}

function closeNav() {
  document.querySelector(".navbar-nav").style.width = "0";
}

function loadMyScript(){
  changeSize();
  document.querySelector('.menu-button')
          .addEventListener("click", openNav);
  document.querySelector(".navbar-nav span")
          .addEventListener("click", closeNav);
}

window.onload = loadMyScript;
window.addEventListener('resize', changeSize);
