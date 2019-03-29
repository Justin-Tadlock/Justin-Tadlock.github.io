$(function() {

    setResumeScrolling("no");

    var today = getToday();

    $("time").text(today);
    $("time").attr({datetime: today});
})

function setResumeScrolling(scrolling) {
    $("#resume-frame").attr("scrolling", "no");
}

function getToday() {
    var currentDate = new Date($.now());
    currentDate = (currentDate.getMonth() + 1) + "/" + currentDate.getDate() + "/" + currentDate.getFullYear();

    return currentDate;
}