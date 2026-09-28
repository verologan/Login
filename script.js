document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');
  const message = document.getElementById('mensaje');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const email = document.getElementById('email').value.trim();

    if (username === '' || password === '' || email === '') {
      message.textContent = 'Por favor, complete todos los campos.';
      message.style.color = 'red';
      return;
    }

    message.textContent = 'Inicio de sesión correcto.';
    message.style.color = 'green';
    form.reset();
  });
});

