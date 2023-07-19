document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.getElementById('menu-button');
  const panel = document.querySelector('panel');
  const body = document.querySelector('body');

  menuButton.addEventListener('click', function () {
    body.classList.toggle('panel-open');
  });

  // Close the panel when clicking outside it
  body.addEventListener('click', function (event) {
    if (event.target !== panel && !panel.contains(event.target) && body.classList.contains('panel-open')) {
      body.classList.remove('panel-open');
    }
  });
});