$(document).ready(function() {
    //by default signin show hota uska kaam hai
    //login ka jo side me box ata
    $('#extra-box2').hide();
    // Sign Up ka jo side me box ata
    $('#extra-box1').show();
    //top pr jo heading ati
    $('#form-heading').text('Sign up');
    // bottom pr jo text likha hota
    $('#toggle-message').text('Already have an account?');
    $('#toggle-link').text('Login In');
    //Sign Up ka text
    $('#extra-box1').html('<h1 class="text-info">Sign Up</h1><br><p id="extra-box-text">Sign up today and become part of an amazing community! Create your account to gain access to personalized recommendations, exclusive offers, and special content curated just for you.</p><div class="socialsbtn"><i class="fa-brands fa-facebook"></i><i class="fa-brands fa-instagram"></i><i class="fa-brands fa-discord"></i></div>');
    $('#btn-text').text('Sign up')
    //if else agr login krna hoto kia show ho or signin to kia ho
    $('#toggle-link').click(function() {
        if ($(this).text() === 'Sign up') {
            $('#Username').show();
            $('#extra-box2').hide();
            $('#extra-box1').show();
            $('#form-heading').text('Sign up');
            $('#toggle-message').text('Already have an account?');
            $(this).text('Login In');
            $('#form-description').text('Sign Up to continue')
            $('#btn-text').text('Sign up')
            $('#extra-box1').html('<h1 class="text-info">Sign Up</h1><br><p id="extra-box-text">Sign up today and become part of an amazing community! Create your account to gain access to personalized recommendations, exclusive offers, and special content curated just for you.</p><div class="socialsbtn"><i class="fa-brands fa-facebook"></i><i class="fa-brands fa-instagram"></i><i class="fa-brands fa-discord"></i></div>');
        } else {
            $('#Username').hide()
            $('#btn-text').text('Login In')
            $('#extra-box1').hide()
            $('#extra-box2').show()
            $('#form-description').text('Welcome back! Please log in to your account.')
            $('#toggle-message').text('Don\'t have an account?');
            $(this).text('Sign up');
            $('#form-heading').text('Login In');
            $('#extra-box2').html('<h1 class="text-info">Login In</h1><br><p id="extra-box-text">Access your personalized dashboard and continue where you left off.</p><div class="socialsbtn"><i class="fa-brands fa-facebook"></i><i class="fa-brands fa-instagram"></i><i class="fa-brands fa-discord"></i></div>');
        }
    });
    //form ka regex or localstorage me save krne wala kaam
    $('#auth-form').submit(function(event) {
        event.preventDefault();
        var usern = $('#Username').val();
        var email = $('#signup-email').val();
        var password = $('#signup-password').val();
        var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        var passwordRegex = /^.{6,}$/;
        var UserRegex = /^.{6,}$/;
        var emailError = $('#email-error');
        var passwordError = $('#password-error');
        var userError = $('#user-error')
        emailError.text('');
        passwordError.text('');
        userError.text('')
        //if agr signup krna hoto
        if ($('#form-heading').text() === 'Sign up') {
            if (!emailRegex.test(email)) {
                emailError.text('Please enter a valid email.');
            }
            if (!passwordRegex.test(password)) {
                passwordError.text('Password must be at least 6 characters long.');
            }
            if (!UserRegex.test(usern)) {
                userError.text('Name must be 6 letters or more');
            }
            if (emailRegex.test(email) && passwordRegex.test(password) && UserRegex.test(usern)){
                var username = $('#Username').val();
                localStorage.setItem('email', email);
                localStorage.setItem('password', password);
                localStorage.setItem('username', username);
                $('#Username').hide();
                $('#extra-box1').hide();
                $('#extra-box2').show();
                $('#toggle-message').text('Don\'t have an account?');
                $('#toggle-link').text('Sign up');
                $('#form-heading').text('Login In');
                $('#extra-box2').html('<h1 class="text-info">Login In</h1><br><p id="extra-box-text">Access your personalized dashboard and continue where you left off.</p><div class="socialsbtn"><i class="fa-brands fa-facebook"></i><i class="fa-brands fa-instagram"></i><i class="fa-brands fa-discord"></i></div>');
            }

        } 
        //else if agr login krna hoto
        else if ($('#form-heading').text() === 'Login In') {
            var savedEmail = localStorage.getItem('email');
            var savedPassword = localStorage.getItem('password');
            var loginEmailError = $('#email-error');
            var loginPasswordError = $('#password-error');
            
            loginEmailError.text('');
            loginPasswordError.text('');
            
            if (email === savedEmail && password === savedPassword) {
                window.location.href = 'index.html';
            } 
            else {
                loginEmailError.text('');
                loginPasswordError.text('Invalid email or password.');
            }
        }
    });
});