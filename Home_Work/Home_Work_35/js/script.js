$(document).ready(function () {
    // open modal
    $('.btn').click(function () {
        $('.wrapper__modal').fadeIn();
    });

    // close modal
    $('.modal__close').click(function () {
        $(this).parents('.wrapper__modal').fadeOut();
    });

    $('.wrapper__modal').click(function (e) {
        if ($(e.target).closest('.modal').length == 0) {
            $(this).fadeOut();
        }
    });

    $('.modal__details-btn').click(function () {
        $('.modal__details-textarea').slideToggle();
    });
});