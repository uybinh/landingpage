function changeSize(){
  let imgs = document.querySelectorAll(".gallery img");
  imgs.forEach(function(img, i){
      if (i !== 0) {
        img.style.height = `${imgs[0].clientHeight}px`;
      }
  })
}

document.querySelectorAll(".gallery img")[0].addEventListener("load", changeSize);
window.addEventListener('resize', changeSize);

