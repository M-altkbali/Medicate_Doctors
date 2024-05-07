$(document).ready(function () {

    $(".home").click(function () {
        $("#form_add-doctor").css("display", "block");
        $("#form_add-appo").css("display", "none");
        $("#form_add-medicine").css("display", "none");
    });

    //#region Doctors

    $("#btn_add-doctor").click(function () {
        $("#form_add-doctor").css("display", "block");

        $("#form_update-doctor").css("display", "none");
        $("#form_add-appo").css("display", "none");
        $("#form_add-medicine").css("display", "none");
    });

    $("#btn_update-doctor").click(function () {
        $("#form_update-doctor").css("display", "block");

        $("#form_add-doctor").css("display", "none");
        $("#form_add-appo").css("display", "none");
        $("#form_add-medicine").css("display", "none");
    });


    //#endregion

    //#region Appointments

    $("#btn_add-appo").click(function () {
        $("#form_add-appo").css("display", "block");

        $("#form_add-doctor").css("display", "none");
        $("#form_update-doctor").css("display", "none");

        $("#form_add-medicine").css("display", "none");
    });

    //#endregion

    //#region Medicins

    $("#btn_add-medicin").click(function () {
        $("#form_add-medicine").css("display", "block");

        $("#form_add-doctor").css("display", "none");
        $("#form_update-doctor").css("display", "none");
        $("#form_add-appo").css("display", "none");

    });

    //#endregion
});



// $("#add-input").click(function () {
//     $("#inputs").append("<input class='form-control'/>");
// });