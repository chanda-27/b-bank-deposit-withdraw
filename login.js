document.getElementById('login-button').addEventListener('click', function () {
  const userField = document.getElementById('user-email');
  const userEmail = userField.value;
  const userPassword = document.getElementById('user-password');
  const userPasswordField = userPassword.value;
  if (userEmail == 'chandabiswas27@gmail.com' && userPasswordField == 'chanda1234') {
    window.location.href = 'banking.html';

  }


});