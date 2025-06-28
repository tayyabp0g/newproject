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

window.addEventListener('DOMContentLoaded', function() {
  // Show preloader for 1.5 seconds, then hide
  setTimeout(function() {
    document.getElementById('preloader').classList.add('hide');
  }, 1500); // 1500ms = 1.5 seconds, aap apne hisaab se kam/zyada kar sakte hain
});



function showPreloaderAndRedirect(url) {
  // Show preloader
  document.getElementById('preloader').classList.remove('hide');
  // Wait a bit, then redirect
  setTimeout(function() {
    window.location.href = url;
  }, 800); // 800ms ya jitna chahiye utna delay
}

// Hide preloader after page load
window.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
    document.getElementById('preloader').classList.add('hide');
  }, 800); // Page load par bhi same delay
});

// Sign Up button
document.querySelectorAll('.signup-btnh').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    showPreloaderAndRedirect('signup.html');
  });
});

// Login button
document.querySelectorAll('.login-btnh').forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    showPreloaderAndRedirect('login.html');
  });
});

