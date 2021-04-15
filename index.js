$(document).ready(function () {

    let projectContainers = ".projectContainer1";

    $(projectContainers).hide();

    $(function menuToggle1() {
        $(".box1").click(function () {
            event.preventDefault();

            $(".defaultContainer").hide("slow");
            $(".projectContainer1").show("slow");

        });
    });

    $(function menuToggleReturn() {
        $(".returnButton").click(function () {
            event.preventDefault();

            $(projectContainers).hide("slow");
            $(".defaultContainer").show("slow");

        });
    });
 


});