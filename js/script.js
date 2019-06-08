$(document).ready(function () {
    "use strict";

    $(window).scroll(function () {
        "use strict";

        if ($(window).scrollTop() < 80) {
            $(".navbar").css({
                "margin-top": "-100px",
                "opacity": "0"
            });
            $('.navbar-default').css({
                "background-color": "rgba(59,59,59, 0)"
            })
        } else {
            $(".navbar").css({
                "margin-top": "0px",
                "opacity": "1"
            })
            $('.navbar-default').css({
                "background-color": "rgba(59,59,59, .7)",
                "border-color": "#444"
            })
            $(".navbar-brand img").css({
                "height": "35px",
                "padding-top": "0px"
            })
            $(".navbar-nav > li > a").css({
                "padding-top": "15px"
            })
        }
    })
})

$(document).ready(function () {
    "use strict";

    // add this line of code from css trick
    $('.nav-link, #scroll-top')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function () {
                        var $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });
})

$(document).ready(function () {
    "use strict";

    $('.navbar-nav li a').click(function () {
        "use strict";

        $('.navbar-nav li a').parent().removeClass("active");
        $(this).parent().addClass("active");
    })
})

$(document).ready(function () {
    "use strict";

    $(window).scroll(function () {
        "use strict";

        $("section").each(function () {
            "use strict";

            var ids = $(this).attr("id");
            var hei = $(this).outerHeight();
            var grttop = $(this).offset().top - 70;

            if ($(window).scrollTop() > grttop && $(window).scrollTop() < grttop + hei) {
                $(".navbar-nav li a[href = '#" + ids + "']").parent().addClass("active");
            } else {
                $(".navbar-nav li a[href = '#" + ids + "']").parent().removeClass("active");
            }
        });
    })
})
