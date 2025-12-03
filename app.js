// Start reference. Code taken from https://www.w3schools.com/howto/howto_js_slideshow.asp
let slideIndex = 1;

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
} 
// End reference

showSection('landing');

function scrollToSection(id)
{
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}

function showSection(id)
{
  document.querySelectorAll('.page-section').forEach(sec => 
  {
    sec.classList.remove('active');
  }
  )

  document.getElementById(id).classList.add('active');

  if (id == 'projects')
  {
    showSlides(slideIndex);
  }
}

document.querySelectorAll('.animated-title').forEach(title => {
  const letters = title.querySelectorAll('span');

  letters.forEach((span, i) => {
    span.style.transitionDelay = `${i * 0.01}s`;
  });
});