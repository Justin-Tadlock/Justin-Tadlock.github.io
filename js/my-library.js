$(function() {

    var today = getToday();

    $("time").text(today);
    $("time").attr({datetime: today});
})

<<<<<<< HEAD
=======
function loadViews()
{
    loadView("about");
    loadView("interests");
    loadView("skills");
    loadView("portfolio");
    loadView("resume");
}

function loadView(viewName) {
    var fileName = "./sections/" + viewName + ".html";

    $("#" + viewName).load( fileName );
}

>>>>>>> parent of 81f7042... Fixing resume viewing issues
function getToday() {
    var currentDate = new Date($.now());
    currentDate = (currentDate.getMonth() + 1) + "/" + currentDate.getDate() + "/" + currentDate.getFullYear();

    return currentDate;
}