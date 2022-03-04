document.getElementById('login-submit').addEventListener('click', function () {
    //get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;

    //get user password
    const passwordField = document.getElementById('user-password');
    const userpassword = passwordField.value;
    //check password
    if (userEmail == 'login@bank.com' && userpassword == 'password') {
        window.location.href = 'banking.html';
    }

});

