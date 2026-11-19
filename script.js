// durag.store — small helpers only.
(function () {
  // Mark the current page in the nav.
  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.main-nav a').forEach(function (a) {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });

  // NOTE: the launch-list signup form submits to FormSubmit
  // (action="https://formsubmit.co/urbanxklusives@gmail.com" on the form
  // in index.html / shop.html). Submissions land in the urbanxklusives@gmail.com
  // inbox — no JavaScript interception here, so the form posts for real.
})();
