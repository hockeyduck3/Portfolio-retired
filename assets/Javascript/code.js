// When the 'Hello there!' in the about me paragraph is clicked on
$('#btn1').click(function() {
    // Fade out the github repo link
    $('.beforeFooter').fadeOut('slow');

    // Get rid of the 'About me', the main card div and the 'Connect with me' card using jQuery's slide up animation
    $('.aboutMe, .mainCard, .container-sm').slideUp('slow');

    // Then run the show hello there function
    showHelloThere();
})

// Hello there function
function showHelloThere () {
    // Once the function is triggered, it will take 1 second to actually get started. This is to allow the other animations time to finish.
    setTimeout(function () {
        // After the one second is up, hide the profile pic and the paragraph using jQuery's hide function.
        $('#profilePic, .text').hide();

        // Remove the class of hide from the hello there gif and hide it using jQuery
        $('#helloThere').removeClass('hide').hide();

        // Set the text of 'About me' to 'Hello There!'
        $('.aboutMe').text('Hello There!');

        // Show the about me and main card section using jQuery's slide down animation
        $('.aboutMe, .mainCard').slideDown('slow');

        // Wait 500 milliseconds 
        setTimeout(function () {
            // After the 500 milliseconds is up, show the hello there gif
            $('#helloThere').slideDown('slow');

            // Let the gif show for 5 seconds
            setTimeout(function () {
                // Then get rid of the about me and the main card div again
                $('.aboutMe, .mainCard').slideUp('slow');

                // Run the show about me function
                showAboutMe();
            }, 5000)
        }, 500)
    }, 1000)
}

// Function for reseting the about me section
function showAboutMe () {
    // Get rid of the hello there gif with the slide up animation
    $('#helloThere').slideUp('slow');

    // Wait 1 second for other animations to finish
    setTimeout(function () {
        // Reset the about me text to say 'About me'
        $('.aboutMe').text('About me');

        // Show the about me and main card section again using the slide down animation
        $('.aboutMe, .mainCard').slideDown('slow');

        // Wait another second
        setTimeout(function () {
            // Show the profile picture using the slide down animation
            $('#profilePic').slideDown('slow');

            // Wait 900 milliseconds
            setTimeout(function () {
                // Show the about me paragraph again using the slide down animation
                $('.text').slideDown('slow')

                // Wait another 900 milliseconds
                setTimeout(function () {
                    // Show the Connect with me card again using the slide down animation
                    $('.container-sm').slideDown('slow');

                    // Fade the github repo link back in
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
        // If it's closed then do an empty return
        return;
    } else {
        // If it's not then run a click on the navbar toggle so it closes when the user clicks anywhere on the main body of the page
        $('.navbar-toggler').click()
    }
})

// This function is for when the user sends a message on the Contact page
$('#my-form').on('submit', function (event) {
    event.preventDefault();

    // Hide and remove the class 'hide' from these error's
    $('#nameError, #emailError, #messageError').hide().removeClass('hide');

    // Variables needed
    var name = $('#name');
    var email = $('#email');
    var message = $('#message');

    // As long as this variable is set to false the ajax call will run
    var anyErrors = false;
    

    // Check and see if the value of name has any number in it
    if (name.val().match(/[0-9]/)) {
        // If it does then display this error and set anyErrors to true
        $('#nameError').text('* Cannot contain numbers');
        $('#nameError').fadeIn('fast');
        anyErrors = true;
    }  

    // If doesn't then check and see if the value of name has any special characters in it
    else if (name.val().match(/[!@#$%^&*(),.?":{}|<>]/)) {
        // If it does then display this error and set anyErrors to true
        $('#nameError').text('* Cannot have special characters');
        $('#nameError').fadeIn('fast');
        anyErrors = true;
    }
    
    // If it doesn't then check and see if the the trimmed value of name is set to an empty string.
    else if (name.val().trim() === '') {
        // If it is then display this error and set anyErrors to true
        $('#nameError').text('* Field cannot be empty');
        $('#nameError').fadeIn('fast');
        anyErrors = true;
    }

    // Then after the first if statement, check and see if the trimmed value of email is empty
    if (email.val().trim() === '') {
        // If it is then display this error and set anyErrors to true
        $('#emailError').text('* Field cannot be empty');
        $('#emailError').fadeIn('fast');
        anyErrors = true;
    } 
    
    // If it's not empty, then check and see if the value of email does not have the '@' symbol
    else if (!email.val().match(/[@]/)) {
        // If it doesn't then display this error and set anyErrors to true
        $('#emailError').text('* Invalid email address');
        $('#emailError').fadeIn('fast');
        anyErrors = true;
    }

    // Finally check and see if the trimmed value of message is empty
    if (message.val().trim() === '') {
        // If it is then display this error and set anyErrors to true
        $('#messageError').text('* Field cannot be empty');
        $('#messageError').fadeIn('fast');
        anyErrors = true;
    }

    // This function will run if an email is properly sent
    function success () {
        // First remove the hide class from ajaxSuccess 
        $('.ajaxSuccess').removeClass('hide');

        // Reset the form
        form.reset();

        // Then show the ajaxSuccess message using the slide down animation
        $('.mainCard').slideDown('slow');

        // Wait 2.5 seconds
        setTimeout(function () {
            // Get rid of the ajaxSuccess message by using the slide up animation
            $('.mainCard').slideUp('slow');

            // Wait 1 seconds for the animation to finish
            setTimeout(function () {
                // Add the hide class back to ajaxSuccess
                $('.ajaxSuccess').addClass('hide');

                // Remove the hide class from my-form
                $('#my-form').removeClass('hide');

                // Then show the form again
                $('.mainCard').slideDown('slow');
            }, 1000)
        }, 2500)
    }

    // This function will run if there were any errors when trying to send the email
    function errorFunc() {
        // First make sure that ajaxError is showing
        $('.ajaxError').show();

        // Remove the hide class from both ajaxError and my-form
        $('.ajaxError, #my-form').removeClass('hide');
        
        //Show the form again, this time with the ajaxError showing as weel 
        $('.mainCard').slideDown('slow');

        // Wait 2.5 seconds
        setTimeout(function () {
            // Then fade out the error message
            $('.ajaxError').fadeOut('slow')
        }, 2500)
    }

    // If none of the above if statements run then this function will send the email
    if (anyErrors === false) {
        // Variable for the form
        var form = document.getElementById('my-form');

        // Get rid of the form using the slide up animation
        $('.mainCard').slideUp('slow');

        // Wait 2 seconds for the animation to finish
        setTimeout(function () {
            // Add the hide class to my-form
            $('#my-form').addClass('hide');

            // Varaible for data
            var data = new FormData(form);

            // Calling the ajax function with these three arguments
            ajax(form.method, form.action, data);

            // Ajax function for sending the emails
            function ajax(method, url, data) {
                // Variable for the XML request
                var xhr = new XMLHttpRequest();

                // Run the XML request
                xhr.open(method, url);
                xhr.setRequestHeader("Accept", "application/json");
                xhr.onreadystatechange = function() {
                    // If the XML request is not done the keep returning until it is
                    if (xhr.readyState !== XMLHttpRequest.DONE) return;
                    // Once it's done check and see if the status is equal to 200, meaning the email was sent.
                    if (xhr.status === 200) {
                        // If it was successful then run the success function
                        success();
                    } else {
                        // If it wasn't then run the error function
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
        // If they did then fade out the error
        $('#nameError').fadeOut('fast');
    } 
    
    // If it wasn't in the name field, check and see if the user typed into the email field
    else if ($(this).attr('id') === 'email') {
        // If they did then fade out the error
        $('#emailError').fadeOut('fast');
    } 
    
    // If the user didn't type into the name or email fields, then they typed into the message field.
    else {
        // Remove any errors.
        $('#messageError').fadeOut('fast');
    }

    // Reset anyErrors to false
    anyErrors = false;
})