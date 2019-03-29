$(function() {

    loadViews();
    
    var today = getToday();

    $("time").text(today);
    $("time").attr({datetime: today});
})

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

function getToday() {
    var currentDate = new Date($.now());
    currentDate = (currentDate.getMonth() + 1) + "/" + currentDate.getDate() + "/" + currentDate.getFullYear();

    return currentDate;
}