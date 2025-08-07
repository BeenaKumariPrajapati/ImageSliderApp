let slideIndex = 0 ;
let slides = document.querySelectorAll(".slide");
let dotsContainer = document.getElementById("dots");
let autoSlideInterval;


slides.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dot.addEventListener("click", () => showSlide(i));
  dotsContainer.appendChild(dot);
});

let dots = document.querySelectorAll(".dot");

function showSlide(n) {
  if (n >= slides.length) slideIndex = 0;
  else if (n < 0) slideIndex = slides.length - 1;
   else slideIndex = n;
  
   slides.forEach(slide => slide.style.display = "none");
   dots.forEach(dot => dot.classList.remove("active"));

   slides[slideIndex].style.display = "block";
   dots[slideIndex].classList.add("active");
}

function changeSlide(n){
    showSlide(slideIndex + n);
}


function startAutoSlide(){
    autoSlideInterval = setInterval(() => {
        changeSlide(1);
    }, 3000);
}


document.getElementById("slider").addEventListener("mouseover", () => {
    clearInterval(autoSlideInterval);
});
document.getElementById("slider").addEventListener("mouseout", () => {
    startAutoSlide();
});


let startX = 0;
document.getElementById("slider").addEventListener("touchstart", e  => {
    startX = e.touches[0].clientX;
});
document.getElementById("slider").addEventListener("touchend", e  => {
    let endX = e.changeTouches[0].clientX;
    if(startX - endX > 50) changeSlide(1);
    else if(endX - startX > 50) changeSlide(-1);
});

 
showSlide(slideIndex);
startAutoSlide();
