function autoSlideImages() {
  const sliders = document.querySelectorAll('.image-slider');

  sliders.forEach(slider => {
    const images = slider.querySelectorAll('img');
    if (images.length <= 1) return;

    let current = 0;

    // تأكد أن الصورة الأولى فعالة عند التحميل
    images.forEach((img, i) => {
      img.classList.toggle('active', i === 0);
    });

    setInterval(() => {
      images[current].classList.remove('active');
      current = (current + 1) % images.length;
      images[current].classList.add('active');
    }, 3000);
  });
}

document.addEventListener('DOMContentLoaded', autoSlideImages);
