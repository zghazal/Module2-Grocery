function validatePhone(txtPhone) {
    var a = document.getElementById(txtPhone).value;
    // This filter asks for something like (12345), so parentheses with any number (at least 1)
    // of digits
    var filter = /[0-9]{10}/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}

function checkEmpty(txt){
    var a = document.getElementById(txt).value;

    if(a.length == 0){
        return true;
    }
    return false;
}
function validateDate(txtDate){
    var a = document.getElementById(txtDate).value;

    var filter = /[0-9]{10}/;
    if (filter.test(a)) {
        return true;
    }
    else {
        return false;
    }
}


// Using date restrictions on datepicker
// Document of datepicker is here: https://api.jqueryui.com/datepicker/
// The following code shows how to set specific dates to exclude, as well as Sundays (Day 0)
// Make sure in your version that you associate Days to remove with Experts (e.g. John doesn't work Mondays)
var unavailableDates = ["06/29/2020","07/07/2020","07/10/2020"];
const setDateFormat = "mm/dd/yy";

function disableDates(date) {
    // Sunday is Day 0, disable all Sundays
    if (date.getDay() === 0)
        return [false];
    var string = jQuery.datepicker.formatDate(setDateFormat, date);
    return [ unavailableDates.indexOf(string) === -1 ]
}


// HERE, JQuery "LISTENING" starts
$(document).ready(function(){

    // phone validation, it calls validatePhone
    // and also some feedback as an Alert + putting a value in the input that shows the format required
    // the "addClass" will use the class "error" defined in style.css and add it to the phone input
    // The "error" class in style.css defines yellow background and red foreground
    $("#phone").on("change", function(){
        if (!validatePhone("phone")){
            alert("Please input a 10 digit phone number");
            $("#phone").val("Phone Number");
            $("#phone").addClass("error");
        }
        else {
            $("#phone").removeClass("error");
        }
    });




    // To change the style of the calender, look in jqueryui.com, under Themes, in the ThemeRoller Gallery
    // You can try different themes (the names are under the calendars) / This is Excite Bike
    // To use a different theme you must include its css in your HTML file.
    // The one I included in my HTML is the Excite Bike, but you can try others

    // Also, here is a good tutorial for playing with the datepicker in https://webkul.com/blog/jquery-datepicker/
    // Datepicker is also documented as one of the widgets here: https://api.jqueryui.com/category/widgets/
    $( "#dateInput").datepicker(
        {
            dateFormat: setDateFormat,
            // no calendar before June 1rst 2020
            minDate: new Date('06/01/2020'),
            maxDate: '+4M',
            // used to disable some dates
            beforeShowDay: $.datepicker.noWeekends,
            beforeShowDay: disableDates
        }
    );


    // Look at the different events on which an action can be performed
    // https://www.w3schools.com/jquery/jquery_events.asp
    // Here, we put
    $("#date").on("mouseenter", function(){
        $("#date").addClass("showInput");
    });
    $("#date").on("mouseleave", function(){
        $("#date").removeClass("showInput");
    });

    $("#Time").on("mouseenter", function(){
        $("#Time").addClass("showInput");
    });
    $("#Time").on("mouseleave", function(){
        $("#Time").removeClass("showInput");
    });

    $("#FName").on("mouseenter", function(){
        $("#FName").addClass("showInput");
    });
    $("#FName").on("mouseleave", function(){
        $("#FName").removeClass("showInput");
    });

    $("#LName").on("mouseenter", function(){
        $("#LName").addClass("showInput");
    });
    $("#LName").on("mouseleave", function(){
        $("#LName").removeClass("showInput");
    });

    $("#phone").on("mouseenter", function(){
        $("#phone").addClass("showInput");
    });
    $("#phone").on("mouseleave", function(){
        $("#phone").removeClass("showInput");
    });

    $("#Email").on("mouseenter", function(){
        $("#Email").addClass("showInput");
    });
    $("#Email").on("mouseleave", function(){
        $("#Email").removeClass("showInput");
    });

    $("#cardname").on("mouseenter", function(){
        $("#cardname").addClass("showInput");
    });
    $("#cardname").on("mouseleave", function(){
        $("#cardname").removeClass("showInput");
    });

    $("#debit").on("mouseenter", function(){
        $("#debit").addClass("showInput");
    });
    $("#debit").on("mouseleave", function(){
        $("#debit").removeClass("showInput");
    });

    $("#month").on("mouseenter", function(){
        $("#month").addClass("showInput");
    });
    $("#month").on("mouseleave", function(){
        $("#month").removeClass("showInput");
    });

    $("#year").on("mouseenter", function(){
        $("#year").addClass("showInput");
    });
    $("#year").on("mouseleave", function(){
        $("#year").removeClass("showInput");
    });

    $("#cvc").on("mouseenter", function(){
        $("#cvc").addClass("showInput");
    });

    $("#cvc").on("mouseleave", function(){
        $("#cvc").removeClass("showInput");
    });

    // https://jqueryui.com/tooltip/
    // The class "highlight" used here is predefined in JQuery UI
    // the message of the tooltip is encoded in the input (in the HTML file)
    $("#date").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });
    $("#time").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });
    $("#FName").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });
    $("#LName").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });
    $("#phone").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });
    $("#Email").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });
    $("#cardname").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });
    $("#debit").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });
    $("#month").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });
    $("#year").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });
    $("#cvc").tooltip({
        classes: {
            "ui-tooltip": "highlight"
        }
    });


});