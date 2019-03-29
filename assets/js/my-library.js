$(function() {

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

    if(monthNum < 10) {
        monthNum = "0" + monthNum;
    }
    if(dayNum < 10) {
        dayNum = "0" + dayNum;
    }

    var dateText = monthNum + "/" + dayNum + "/" + yearNum;

    $("time").text(dateText);
}