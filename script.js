window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.navbar');

  if (window.scrollY > 50) {
    navbar.style.background = '#000';
  } else {
    navbar.style.background = 'rgba(0,0,0,0.6)';
  }
});

const galleryImages = document.querySelectorAll('.gallery-item img');

galleryImages.forEach((image) => {
  image.addEventListener('click', () => {
    image.classList.toggle('zoomed');
  });
});

console.log('Tirth Studio Website Loaded Successfully');
