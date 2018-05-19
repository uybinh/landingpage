function changeSize(){
  let imgs = document.querySelectorAll(".crop img");
  imgs.forEach(function(img, i){
      if (i !== 0) {
        img.style.height = `${imgs[0].clientHeight}px`;
      }
  })
}

window.onload = changeSize();
window.addEventListener('resize', changeSize);

