var username = document.getElementById('username');
var password = document.getElementById('password');
var confirmPassword = document.getElementById('confirmPassword');
var fName = document.getElementById('fName');
var lName = document.getElementById('lName');
var email = document.getElementById('email');
var phone = document.getElementById('phone');
var registerButton = document.getElementById('submit');

function clearError() {
    var errorElements = document.getElementsByClassName('error');
    for (var i = 0; i < errorElements.length; i++) {
        errorElements[i].textContent = '';
    }
}

registerButton.addEventListener('click', function() {
    clearError();

    if (username.value == '') {
        document.getElementById('usernameError').textContent = 'Please enter username';
        username.focus();
    }
    else if (password.value == '') {
        document.getElementById('passwordError').textContent = 'Please enter password';
        password.focus();
    }
    else if (confirmPassword.value == '') {
        document.getElementById('confirmPasswordError').textContent = 'Please confirm password';
        confirmPassword.focus();
    }
    else if (fName.value == '') {
        document.getElementById('fnameError').textContent = 'Please enter first name';
        fName.focus();
    }
    else if (lName.value == '') {
        document.getElementById('lnameError').textContent = 'Please enter last name';
        lName.focus();
    }
    else if (email.value == '') {
        document.getElementById('emailError').textContent = 'Please enter email';
        email.focus();
    }
    else if (phone.value == '') {
        document.getElementById('phoneError').textContent = 'Please enter phone';
        phone.focus();
    }
    else {
        alert('Register successful');
        window.location.href = 'login.html';
    }

})