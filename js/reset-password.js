var username = document.getElementById('username');
var email = document.getElementById('email');
var resetButton = document.getElementById('submit');

function clearError() {
    var errorElements = document.getElementsByClassName('error');
    for (var i = 0; i < errorElements.length; i++) {
        errorElements[i].textContent = '';
    }
}

resetButton.addEventListener('click', function() {
    clearError();

    if (username.value == '') {
        document.getElementById('usernameError').textContent = 'Please enter username';
        username.focus();
    }
    else if (email.value == '') {
        document.getElementById('emailError').textContent = 'Please enter email';
        email.focus();
    }
    else {
        alert('Reset successful');
        window.location.href = 'login.html';
    }
})
