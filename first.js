const scrollBtn = document.getElementById('scrollToTopBtn');
window.addEventListener('scroll', function() {
  // Show after 1st page/section (e.g. 400px, adjust as needed)
  if (window.scrollY > 400) {
    scrollBtn.classList.add('show');
  } else {
    scrollBtn.classList.remove('show');
  }
});

scrollBtn.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Intersection Observer for feature blocks
const featureBlocks = document.querySelectorAll('.features-list .feature-block');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible');
    }
  });
}, {
  threshold: 0.3 // 30% block visible ho to animation chale
});

featureBlocks.forEach(block => {
  observer.observe(block);
});

