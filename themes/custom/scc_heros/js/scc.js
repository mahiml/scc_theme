function openMainNav() {
    document.getElementById("main-page-container").style.marginLeft = "200px";
    document.getElementById("main-sidenav").style.width = "200px";
}

function closeMainNav() {
    document.getElementById("main-page-container").style.marginLeft = "0";
    document.getElementById("main-sidenav").style.width = "0";
}

function PopupWin(url, w, h) {
    win = window.open(url, '_blank', 'resizable=no,scrollbars=no,toolbar=no,menubar=no,location=no,left=320,top=240,width=' + w + ',height=' + h);
    win.focus
}

function startTour() {
    var tour = introJs()
    tour.setOption('tooltipPosition', 'auto');
    tour.setOption('highlightClass', 'sc-bg-blue')
    tour.setOption('positionPrecedence', ['bottom', 'right', 'left', 'top'])
    tour.start()
}

function createCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name,"",-1);
}


(function ($) {

    $('#searchtoggl').on('click', function (e) {
        e.preventDefault();

        if (!$('#searchbar').is(":visible")) {
            // if invisible we switch the icon to appear collapsable
            $(this).find('i').removeClass('ion-search').addClass('ion-close-round');
        } else {
            // if visible we switch the icon to appear as a toggle
            $(this).find('i').removeClass('ion-close-round').addClass('ion-search');
        }
        $('#searchbar').slideToggle(300, function () {
            // callback after search bar animation
        });

    });

    $('#searchform').submit(function (e) {
        e.preventDefault(); // stop form submission
    });

    $('#collapseSectionmenu').on('shown.bs.collapse', function () {
        $(".icon.ion-chevron-down").removeClass("ion-chevron-down").addClass("ion-chevron-up");
    });

    $('#collapseSectionmenu').on('hidden.bs.collapse', function () {
        $(".icon.ion-chevron-up").removeClass("ion-chevron-up").addClass("ion-chevron-down");
    });

    $('#collapseSearch').on('shown.bs.collapse', function () {
        $(".icon.ion-search").removeClass("ion-search").addClass("ion-close-circled");
    });

    $('#collapseSearch').on('hidden.bs.collapse', function () {
        $(".icon.ion-close-circled").removeClass("ion-close-circled").addClass("ion-search");
    });

    $('.clickablediv').keypress(function (e) {
        if (e.which == 13) {//Enter key pressed
            $(this).find('.box .overbox .learnmore a')[0].click();
        }
    });

    $("#form_last_name").bind("propertychange change click keyup input paste", function (event) {
        validateForm();
    })
    $("#form_first_name").bind("propertychange change click keyup input paste", function (event) {
        validateForm();
    })
    $("#form_email_mail").bind("propertychange change click keyup input paste", function (event) {
        validateForm();
    })

    function validateEmail($email) {
        var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailReg.test($email);
    }

    function validateForm() {
        if (($.trim($("#form_last_name").val()).length <= 0) && ($.trim($("#form_first_name").val()).length <= 0) && ($.trim($("#form_email_mail").val()).length <= 0)) {
            $("#err_msg_text").text("Please enter a first name, last name, or email ID to start searching");
            $("#form_submit_main").attr("disabled", true);
        } else if (!validateEmail($.trim($("#form_email_mail").val()))) {
            $("#err_msg_text").text("Not a valid email");
            $("#form_submit_main").attr("disabled", true);
        } else {
            $("#form_submit_main").attr("disabled", false);
            $("#err_msg_text").text("");
        }
    }


    $('#main-menu-div').on('click', function (e) {
        document.getElementById("scSidenav").style.width = "275px";
        $('#scSidenav').find('a').each(function () {
            var $input = $(this);
            $input.attr("tabindex", 0);
        });
    });

    $('.closebtn').on('click', function (e) {
        document.getElementById("scSidenav").style.width = "0px";
        $('#scSidenav').find('a').each(function () {
            var $input = $(this);
            $input.attr("tabindex", -1);
        });
    });

    $('#main-menu-div').keypress(function (e) {
        if (e.keyCode == 13) {
            document.getElementById("scSidenav").style.width = "275px";
            $('#scSidenav').find('a').each(function () {
                var $input = $(this);
                $input.attr("tabindex", 0);
            });
        }
    });

    $(function () {
        var hostname = window.location.hostname;
        var cx = '007852208930303085676:fgl2yqyntg0';
        var gcse = document.createElement('script');
        gcse.type = 'text/javascript';
        gcse.async = true;
        gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(gcse, s);
    });

    $(function () {

        $('#scc-adobe-megamenu').css('display', 'block');

      /*  var is_mobile = $('#scc-adobe-megamenu').css('display')
        var introcookie = readCookie('intro-cookie');
        if ((is_mobile == 'block') && (introcookie == null) &&  (window.location.pathname == '/')) {
            startTour();
            createCookie('intro-cookie','shown',7);
        }
*/
        /**
         * NAME: Bootstrap 3 Multi-Level by Johne
         * This script will active Triple level multi drop-down menus in Bootstrap 3.*
         */
        $('li.dropdown-submenu').on('click', function (event) {
            event.stopPropagation();
            if ($(this).hasClass('open')) {
                $(this).removeClass('open');
                $('li.dropdown-submenu').find('a').each(function () {
                    var $input = $(this);
                    $input.attr("tabindex", -1);
                });
            } else {
                $('li.dropdown-submenu').removeClass('open');
                $(this).addClass('open');
                $('li.dropdown-submenu').find('a').each(function () {
                    var $input = $(this);
                    $input.attr("tabindex", 0);
                });
            }
        });

        $('.dropdown-submenu a.stay-here').on("click", function (e) {
            $(this).next('ul').toggle();
            var p = $(this).parent();
            $(this).parent().siblings().children('a.stay-here').each(function () {
                $(this).next('ul').each(function () {
                    if ($(this).css("display") == "block") {
                        $(this).css('display', 'none');
                    }
                })
            });
            e.stopPropagation();
            e.preventDefault();
        });

        $('li.dropdown').on('click', function (event) {
            if ($(this).hasClass('open')) {
                $(this).find('ul.dropdown-menu').find('li').find('a').each(function () {
                    var $input = $(this);
                    $input.attr("tabindex", -1);
                });
            } else {
                $(this).find('ul.dropdown-menu').find('li').find('a').each(function () {
                    var $input = $(this);
                    $input.attr("tabindex", 0);
                });
            }
        });

        $('li.dropdown-submenu').keydown(function (e) {
            var keyCode = e.keyCode ? e.keyCode : e.which;
            if (keyCode == 13) {
                if ($(this).hasClass('open')) {
                    $('li.dropdown-submenu').find('a').each(function (e) {
                        var $input = $(this);
                        $input.attr("tabindex", -1);
                    });
                } else {
                    $('li.dropdown-submenu').find('a').each(function () {
                        var $input = $(this);
                        $input.attr("tabindex", 0);
                    });
                }
            }
        });

        $('li.dropdown').keydown(function (e) {
            var keyCode = e.keyCode ? e.keyCode : e.which;
            if (keyCode == 13) {
                if ($(this).hasClass('open')) {
                    $(this).find('ul.dropdown-menu').find('li').find('a').each(function () {
                        var $input = $(this);
                        $input.attr("tabindex", -1);
                    });
                } else {
                    $("a:first", this).click();
                    $(this).find('ul.dropdown-menu').find('li').find('a').each(function () {
                        var $input = $(this);
                        $input.attr("tabindex", 0);
                    });
                }
            }
        });
    });

    // ===== Scroll to Top ==== 
    //$(window).scroll(function () {
        //if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
            //$('#return-to-top').fadeIn(200);    // Fade in the arrow
        //} else {
            //$('#return-to-top').fadeOut(200);   // Else fade out the arrow
        //}
    //});

    /* Every time the window is scrolled ... */
    $(window).scroll(function () {

        /* Check the location of each desired element */
        $('.hideme').each(function (i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            /* If the object is completely visible in the window, fade it it */
            if (bottom_of_window > bottom_of_object) {
                $(this).animate({'opacity': '1'}, 600);
            }
        });
    });


    //$('#return-to-top').click(function () {      // When arrow is clicked
        //$('body,html').animate({
            //scrollTop: 0                       // Scroll to top of body
        //}, 500);
    //});
    "use strict";
    $(document).ready(function () {
        if ($('.megamenu').length) {
            // initialize the megamenu
            $('.megamenu').accessibleMegaMenu();

            // hack so that the megamenu doesn't show flash of css animation after the page loads.
            setTimeout(function () {
                $('body').removeClass('init');
            }, 500);
        }
    });
})(jQuery);

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("bttBtn").style.display = "block";
        } else {
            document.getElementById("bttBtn").style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
 