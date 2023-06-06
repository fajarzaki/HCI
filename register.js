const form = document.getElementById('register-form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const birthdateInput = document.getElementById('birth-date');
  const passwordInput = document.getElementById('password');
  const agreeInput = document.getElementById('agree-term');

  console.log('Name: ' + nameInput.value);
  console.log('Email: ' + emailInput.value);
  console.log('Birth: ' + birthdateInput.value);
  console.log('Password: ' + passwordInput.value);

  if (nameInput.value == '') {
    document.getElementById('error').innerHTML += '<p>Name must be filled</p>';
  }
  if (nameInput.value.length < 5) {
    document.getElementById('error').innerHTML +=
      '<p>Name must consists of min. 5</p>';
  }

  console.log('Form submitted');
});
