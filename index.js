$(document).ready(function () {

    let projectContainers = ".projectContainer1, .projectContainer2, .projectContainer3";

    $(projectContainers).hide();

    $(function menuToggle1() {
        $(".box1").click(function () {
            event.preventDefault();

            $(".defaultContainer").hide("slow");
            $(".projectContainer1").show("slow");

        });
    });

    $(function menuToggle2() {
        $(".box2").click(function () {
            event.preventDefault();

            $(".defaultContainer").hide("slow");
            $(".projectContainer2").show("slow");

        });
    });

    $(function menuToggle3() {
        $(".box3").click(function () {
            event.preventDefault();

            $(".defaultContainer").hide("slow");
            $(".projectContainer3").show("slow");

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