let slideIndex = 0;
slideShow();
/*
function slideShow(){
  let slides = document.querySelectorAll('.myslides');
  for(let i = 0; 1 <= slides.length ; i++){
    slides[i].style.display = 'none';
  }
  slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(slideShow, 1000);
}*/

function slideShow() {
  let slides = document.querySelectorAll('.myslides');
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';
  setTimeout(slideShow, 4000); // Change image every 4 seconds
}
