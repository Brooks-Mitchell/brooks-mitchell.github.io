// Replace this URL with your deployed Google Apps Script Web App URL
const SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_URL';

document.querySelectorAll('.email-form').forEach(form => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const msg = form.querySelector('.form-msg');
    const btn = form.querySelector('button');
    btn.disabled = true;
    btn.textContent = 'Sending…';

    fetch(SCRIPT_URL, { method: 'POST', body: new FormData(form) })
      .then(() => {
        msg.textContent = '✓ You\'re in. Talk soon.';
        msg.classList.add('visible');
        form.querySelector('input').value = '';
      })
      .catch(() => {
        msg.textContent = 'Something went wrong — try emailing me directly.';
        msg.classList.add('visible');
      })
      .finally(() => {
        btn.disabled = false;
        btn.textContent = 'Subscribe';
      });
  });
});
