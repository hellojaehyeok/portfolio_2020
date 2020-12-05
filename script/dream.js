const windowWidth = $( window ).width();
let IS_SmallWidth = (windowWidth < 500) ? true : false;


if(IS_SmallWidth){
  $("div.subImg > p > br").remove();
}else{
  const checkpoint = window.innerHeight - 500;
  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;
    if (currentScroll <= checkpoint) {
      opacityG = 1 - currentScroll / checkpoint;
    } else {
      opacityG = 0;
    }
    document.querySelector(".title").style.opacity = opacityG;
  });
}
