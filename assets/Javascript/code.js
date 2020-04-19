// When the 'Hello there!' in the about me paragraph is clicked on
$('#btn1').click(function() {
    // Get rid of the 'About me' and the main card div using jQuery's slide up animation
    $('.aboutMe, .mainCard').slideUp('slow');

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
            }, 900)
        }, 1000)
    }, 1000)
}