(function () {
    // Variables
    var btn_collapse_nav = ".navbar-header .navbar-toggle";
    var overflowAttr = "";
    var heightAttr = "";
    var fncLeavingAlert = function (isActive) {
        if (isActive) {
            console.log("abc");
            window.onbeforeunload = function () {
                return 'Are you sure you want to leave?';
            };
            $(window).bind('beforeunload', function () {
                return 'Are you sure you want to leave?';
            });
        }
    };

    // Resize page
    $(window).resize(function () {
        var width = $(this).width();
        if (width > 767) {
            if ($(".navbar").hasClass('animation-nav-mb')) {
                $(btn_collapse_nav).click();
                $(".header-primus .hero-section").removeAttr("style");

            }
        }
    });

    //  Flowtype 
    $('body').flowtype({
        minFont: 19,
        maxFont: 19,
        fontRatio: 30
    });

    // Click to scroll to section 
    $('.navbar ul li a[href^="#"]').on('click', function (event) {
        var windowW = $(window).width();
        var target = $($(this).attr('href'));
        // $(".navbar ul li ").removeClass("active");
        // $(this).parent().addClass("active");
        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top - 70
            }, 1000);
        }
        if (windowW < 768) {
            $(btn_collapse_nav).click();
        }
    });

    // Click open navigation bar animation
    $(btn_collapse_nav).click(function () {
        var windowH = $(window).height();
        $(".header-primus .hero-section").height(windowH);
        $(".navbar").toggleClass("animation-nav-mb");
        if ($(".navbar").hasClass('animation-nav-mb')) {
            overflowAttr = "hidden";
            heightAttr = "auto";
        } else {
            overflowAttr = "";
            heightAttr = "";
        }
        $("html, body").css({
            "overflow": overflowAttr,
            "height": heightAttr
        });
    });

    var fontOffice = {
        changeLang: function () {
            $.ajax({
                url: changeLangUrl,
                dataType: 'json'
            }).done(function (data) {
                if (data.status == 'SUCCESS') {
                    location.reload();
                }
            });
        },
    }
    $(document).ready(function () {
        $('#locale').click(function () {
            fontOffice.changeLang();
        });
    });

}());



