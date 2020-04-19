$('#btn1').click(function() {
    $('.aboutMe, .idk').slideUp('slow');

    showHelloThere();
})

function showHelloThere () {
    setTimeout(function () {
        $('#profilePic, .text').hide();

        $('#helloThere').removeClass('hide').hide();

        $('.aboutMe').text('Hello There!');

        $('.aboutMe, .idk').slideDown('slow');

        setTimeout(function () {
            $('#helloThere').slideDown('slow');

            setTimeout(function () {
                $('.aboutMe, .idk').slideUp('slow');

                showAboutMe();
            }, 5000)

        }, 500)

    }, 1000)
}

function showAboutMe () {
    $('#helloThere').slideUp('slow');

    setTimeout(function () {
        $('#helloThere').addClass('hide');

        $('.aboutMe').text('About me');

        $('.aboutMe, .idk').slideDown('slow');

        setTimeout(function () {
            $('#profilePic, .text').slideDown('slow');
        }, 1000)
    }, 1000)
}