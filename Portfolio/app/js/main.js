$(document).ready(function() {
    $(".header__burger").on("click", function(e) {
        e.preventDefault();
        $(".header__burger, .menu__list").toggleClass("active");
    });

    $(".menu a").on("click", function(event) {
        event.preventDefault();

        var id = $(this).attr('href'),

            top = $(id).offset().top;

        $('body,html').animate({ scrollTop: top }, 1000);
    });

    var mixer = mixitup('.portfolio__content');



});