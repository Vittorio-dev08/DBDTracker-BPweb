// Simulated Ticker & Scroll Reveals
document.addEventListener('DOMContentLoaded', () => {
  // Interactive mockup screenshot tab switcher
  const tabBtns = document.querySelectorAll('.mockup-tab-btn');
  const showcaseImgs = document.querySelectorAll('.showcase-img');
  
  tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const target = btn.getAttribute('data-tab');
      showcaseImgs.forEach((img) => {
        if (img.id === `mockup-img-${target}`) {
          img.classList.add('active');
        } else {
          img.classList.remove('active');
        }
      });
    });
  });

  // Reveal observer for entry cards
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  };

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        revealObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const cards = document.querySelectorAll('.feature-card, .step-card');
  cards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(24px)';
    card.style.transition = 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    revealObserver.observe(card);
  });
});
