$(function () {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#sideNav'
    });

    setResumeScrolling("no");

    setCopyRightDate();

})

function setResumeScrolling(scrolling) {
    $("#resume-frame").attr("scrolling", "no");
}

function setCopyRightDate() {
    var currentDate = new Date($.now());

    var yearNum = currentDate.getFullYear();
    var monthNum = currentDate.getMonth() + 1;
    var dayNum = currentDate.getDate();

    if (monthNum < 10) {
        monthNum = "0" + monthNum;
    }
    if (dayNum < 10) {
        dayNum = "0" + dayNum;
    }

    var dateText = yearNum + "-" + monthNum + "-" + dayNum;

    $("time").text(dateText);
    $("time").attr({
        datetime: dateText
    });
}