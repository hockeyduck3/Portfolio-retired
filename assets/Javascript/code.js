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