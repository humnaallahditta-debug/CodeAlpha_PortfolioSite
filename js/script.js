/* =========================================================
   SCROLL REVEAL ANIMATION
   Jab bhi koi ".reveal" wala element screen pe nazar aaye,
   uspe "active" class add ho jaye — taake CSS animation chale
========================================================= */

const revealElements = document.querySelectorAll('.reveal');

// Intersection Observer — ye browser ka built-in tool hai jo batata hai
// ke koi element screen (viewport) mein andar aaya hai ya nahi
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active'); // screen pe aa gaya -> dikhado
    }
  });
}, {
  threshold: 0.15 // element ka 15% hissa dikhte hi animation chalu ho jaye
});

// Har reveal element ko observer ke sath jodna
revealElements.forEach(el => observer.observe(el));