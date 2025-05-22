const toggleBtn = document.getElementById('toggle-btn');
const body = document.body;

body.classList.add('light');

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('light');
  body.classList.toggle('dark');
})