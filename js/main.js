/* ============================================================
   NAV — hamburger toggle + active link highlight
   ============================================================ */
(function () {
  const toggle = document.querySelector('.nav__toggle');
  const links  = document.querySelector('.nav__links');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      const isOpen = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when a link is tapped
    links.querySelectorAll('.nav__link').forEach(function (link) {
      link.addEventListener('click', function () {
        links.classList.remove('open');
        toggle.setAttribute('aria-expanded', false);
      });
    });
  }

  // Highlight active page link
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();

/* ============================================================
   FAQ ACCORDION
   ============================================================ */
(function () {
  document.querySelectorAll('.faq-question').forEach(function (btn) {
    btn.addEventListener('click', function () {
      const answer = btn.nextElementSibling;
      const isOpen = btn.classList.contains('open');

      // Close all others
      document.querySelectorAll('.faq-question.open').forEach(function (openBtn) {
        openBtn.classList.remove('open');
        openBtn.nextElementSibling.classList.remove('open');
      });

      // Toggle current
      if (!isOpen) {
        btn.classList.add('open');
        answer.classList.add('open');
      }
    });
  });
})();
