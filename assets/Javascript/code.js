// When the 'Hello there!' in the about me paragraph is clicked on
$('#btn1').click(function() {
    $('.beforeFooter').fadeOut('slow');

    $('.aboutMe, .mainCard, .container-sm').slideUp('slow');

    showHelloThere();
})

// Hello there function
function showHelloThere () {
    // Once the function is triggered, it will take 1 second to actually get started. This is to allow the other animations time to finish.
    setTimeout(function () {
        $('#profilePic, .text').hide();

        $('#helloThere').hide().removeClass('hide');

        $('.aboutMe').text('Hello There!');

        $('.aboutMe, .mainCard').slideDown('slow');

        // Wait 500 milliseconds 
        setTimeout(function () {
            $('#helloThere').slideDown('slow');

            // Let the gif show for 5 seconds
            setTimeout(function () {
                $('.aboutMe, .mainCard').slideUp('slow');

                showAboutMe();
            }, 5000)
        }, 500)
    }, 1000)
}

// Function for reseting the about me section
function showAboutMe () {
    $('#helloThere').slideUp('slow');

    // Wait 1 second for other animations to finish
    setTimeout(function () {
        $('.aboutMe').text('About me');

        $('.aboutMe, .mainCard').slideDown('slow');

        // Wait another second
        setTimeout(function () {
            $('#profilePic').slideDown('slow');

            // Wait 900 milliseconds
            setTimeout(function () {
                $('.text').slideDown('slow')

                // Wait another 900 milliseconds
                setTimeout(function () {
                    $('.container-sm').slideDown('slow');

                    $('.beforeFooter').fadeIn('slow');
                }, 900)
            }, 900)
        }, 1000)
    }, 1000)
}

// Function for if the user clicks on the main body of the page
$('.container-fluid').click(function () {
    // Check and see if the navbar toggle is open or closed
    if ($('.navbar-toggler').hasClass('collapsed')) {
        return;
    } else {
        $('.navbar-toggler').click()
    }
})

// This function is for when the user sends a message on the Contact page
$('#my-form').on('submit', function (event) {
    event.preventDefault();

    // Hide and remove the class 'hide' from these error's
    $('#nameError, #emailError, #messageError').hide().removeClass('hide');

    var name = $('#name');
    var email = $('#email');
    var message = $('#message');

    // As long as this variable is set to false the ajax call will run
    var anyErrors = false;
    

    // Check and see if the value of name has any number in it
    if (name.val().match(/[0-9]/)) {
        $('#nameError').text('* Cannot contain numbers');
        $('#nameError').fadeIn('fast');
        anyErrors = true;
    }  

    // If doesn't then check and see if the value of name has any special characters in it
    else if (name.val().match(/[!@#$%^&*(),.?":{}|<>]/)) {
        $('#nameError').text('* Cannot have special characters');
        $('#nameError').fadeIn('fast');
        anyErrors = true;
    }
    
    // If it doesn't then check and see if the the trimmed value of name is set to an empty string.
    else if (name.val().trim() === '') {
        $('#nameError').text('* Field cannot be empty');
        $('#nameError').fadeIn('fast');
        anyErrors = true;
    }

    // Check and see if the trimmed value of email is empty
    if (email.val().trim() === '') {
        $('#emailError').text('* Field cannot be empty');
        $('#emailError').fadeIn('fast');
        anyErrors = true;
    } 
    
    // If it's not empty, then check and see if the value of email does not have the '@' symbol
    else if (!email.val().match(/[@]/)) {
        $('#emailError').text('* Invalid email address');
        $('#emailError').fadeIn('fast');
        anyErrors = true;
    }

    // Finally check and see if the trimmed value of message is empty
    if (message.val().trim() === '') {
        $('#messageError').text('* Field cannot be empty');
        $('#messageError').fadeIn('fast');
        anyErrors = true;
    }

    // This function will run if an email is properly sent
    function success () { 
        $('.ajaxSuccess').removeClass('hide');

        form.reset();

        $('.mainCard').slideDown('slow');

        // Wait 2.5 seconds
        setTimeout(function () {
            $('.mainCard').slideUp('slow');

            // Wait 1 seconds for the animation to finish
            setTimeout(function () {
                $('.ajaxSuccess').addClass('hide');

                $('#my-form').removeClass('hide');

                $('.mainCard').slideDown('slow');
            }, 1000)
        }, 2500)
    }

    // This function will run if there were any errors when trying to send the email
    function errorFunc() {
        $('.ajaxError').show();

        $('.ajaxError, #my-form').removeClass('hide');
        
        $('.mainCard').slideDown('slow');

        // Wait 2.5 seconds
        setTimeout(function () {
            $('.ajaxError').fadeOut('slow')
        }, 2500)
    }

    // If none of the above if statements run then this function will send the email
    if (anyErrors === false) {
        var form = document.getElementById('my-form');

        $('.mainCard').slideUp('slow');

        // Wait 2 seconds for the animation to finish
        setTimeout(function () {
            $('#my-form').addClass('hide');

            var data = new FormData(form);

            ajax(form.method, form.action, data);

            // Ajax function for sending the emails
            function ajax(method, url, data) {
                var xhr = new XMLHttpRequest();

                xhr.open(method, url);
                xhr.setRequestHeader("Accept", "application/json");
                xhr.onreadystatechange = function() {
                    if (xhr.readyState !== XMLHttpRequest.DONE) return;
                    // Once it's done check and see if the status is equal to 200, meaning the email was sent.
                    if (xhr.status === 200) {
                        success();
                    } else {
                        errorFunc();
                    }
                };
                xhr.send(data);
            }
        }, 2000)
    }
})

// This function will run when the user types into either name, email, or message.
$('#name, #email, #message').on('keydown', function () {
    // First check and see if the user typed into the name field
    if ($(this).attr('id') === 'name') {
        $('#nameError').fadeOut('fast');
    } 
    
    // If it wasn't in the name field, check and see if the user typed into the email field
    else if ($(this).attr('id') === 'email') {
        $('#emailError').fadeOut('fast');
    } 
    
    // If the user didn't type into the name or email fields, then they typed into the message field.
    else {
        $('#messageError').fadeOut('fast');
    }

    anyErrors = false;
})