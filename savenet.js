/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  //slider animation js 
  let slideIndex = 0;

function showSlide() {
  const sliderWrapper = document.querySelector('.slider-wrapper');
  sliderWrapper.style.transform = `translateX(-${slideIndex * 100 / 1}%)`;
}

function prevSlide() {
  slideIndex = (slideIndex === 0) ? 8 : slideIndex - 1;
  showSlide();
}

function nextSlide() {
  slideIndex = (slideIndex === 8) ? 0 : slideIndex + 1;
  showSlide();
}

setInterval(() => {
  slideIndex = (slideIndex === 8) ? 0 : slideIndex + 1;
  showSlide();
}, 5000);

