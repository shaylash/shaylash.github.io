---
---

document.addEventListener("DOMContentLoaded",function(){

  move()
  gifHover()


});

function move() {
  let elems = document.getElementsByClassName("progress-bar");   

  [].forEach.call(elems, function (el, index) {

    let width = el.getAttribute("aria-valuemin");

    let id = setInterval(frame, .0+index);

    function frame() {
      if (width >= el.getAttribute("aria-valuenow")) {
        clearInterval(id);
      } else {
        width++; 
        el.style.width = width + '%'; 
      }
    }
  });

}

function gifHover() {

  let imageWrapper = document.getElementsByClassName("avatar-wrapper")[0];
  let image = document.getElementsByClassName("avatar")[0];


  imageWrapper.addEventListener("mouseover", () => {
    let src = image.src;
    console.log(src)

    image.src = src.replace(/\.[^/.]+$/, ".gif")

  })

  imageWrapper.addEventListener("mouseout", () => {
    let src = image.src;
    console.log(src)
    image.src = src.replace(/\.[^/.]+$/, ".jpg")
  })

}