const slides = document.getElementsByClassName("swiper-slide");

const array = Array.prototype.slice.call(slides)
array.forEach(slide=>console.log(slide))