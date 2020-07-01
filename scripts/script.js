const $portfolio = document.querySelector('.portfolio-menu');
const $sobre = document.querySelector('.sobre-menu');

$portfolio.addEventListener("click", () => {
  window.scrollTo({
    top: 630,
    behavior: 'smooth'
  });  
});

$sobre.addEventListener("click", () => {
  window.scrollTo({
    top: 900,
    behavior: 'smooth'
  });
});
