document.addEventListener("DOMContentLoaded", () => {
  // ===== سلايدر الصور =====
  function autoSlideImages() {
    const sliders = document.querySelectorAll('.image-slider');

    sliders.forEach(slider => {
      const images = slider.querySelectorAll('img');
      if (images.length <= 1) return;

      let current = 0;
      images.forEach((img, i) => img.classList.toggle('active', i === 0));

      setInterval(() => {
        images[current].classList.remove('active');
        current = (current + 1) % images.length;
        images[current].classList.add('active');
      }, 3000);
    });
  }
  autoSlideImages();
document.addEventListener("DOMContentLoaded", () => {
  const countdownEl = document.getElementById("countdown");
  const statusPopup = document.getElementById("statusPopup");
  const statusText = document.getElementById("statusText");

 document.addEventListener("DOMContentLoaded", () => {
  const countdownEl = document.getElementById("countdown");

  const eventDate = new Date(new Date().getFullYear(), new Date().getMonth(), 25, 12, 30, 0).getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const diff = eventDate - now;

    if (diff <= 0) {
      countdownEl.innerText = "بدأت الندوة الآن";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdownEl.innerText = `تبقّى ${days} يوم • ${hours} ساعة • ${minutes} دقيقة • ${seconds} ثانية`;
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);


