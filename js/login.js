var userName = document.getElementById('username');
var password = document.getElementById('password');
var loginButton = document.getElementById('submit');

function clearError() {
    var errorElements = document.getElementsByClassName('error');
    for (var i = 0; i < errorElements.length; i++) {
        errorElements[i].textContent = '';
    }
}

loginButton.addEventListener('click', function() {
    clearError();

    if (userName.value == '') {
        document.getElementById('usernameError').textContent = 'Please enter username';
        userName.focus();
    }
    else if (password.value == '') {
        document.getElementById('passwordError').textContent = 'Please enter password';
        password.focus();
    }
    else {
        alert('Login successful');
        window.location.href = 'register.html';
    }
});