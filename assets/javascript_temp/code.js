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