let currentImageIndex = 0;
const images = document.querySelectorAll('#BilderSlideShow img');
const nextBtn = document.getElementById('ButtonImageSlideShowRight');

nextBtn.addEventListener('click', () => {
  // Aktuelles Bild verstecken
  images[currentImageIndex].classList.add('hidden');

  // Nächstes Bild zeigen
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].classList.remove('hidden');
});

const nextBtnleft = document.getElementById('ButtonImageSlideShowLeft');
nextBtnleft.addEventListener('click', () => {
    // Aktuelles Bild verstecken
    images[currentImageIndex].classList.add('hidden');
  
    // Nächstes Bild zeigen
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    images[currentImageIndex].classList.remove('hidden');
  });