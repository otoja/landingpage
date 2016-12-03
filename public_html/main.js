
/* 
 Created on : 2016-11-29
 Author     : Kamila Przychodzen <kamila.przychodzen@gmail.com>
 */

'use strict';
var sendMail = function () {
    var name = $('#name').val();
    var mail = $('#email').val();
    var userMessage = $('#message').val();

    if (formIsValid(name, mail)) {
        var message = "New contact request from: " + name + '. \nUser message: \n' + userMessage;

        $.ajax({
            url: "https://formspree.io/shagrin84@gmail.com",
            method: "POST",
            data: {message: message, _subject: "New contact form submitted", replyTo: mail},
            dataType: "json"
        }).then(function () {
            $(".form-landing").css('display', 'none');
            $("#confirmation-message").removeClass("hidden");
        });
    }
};

function formIsValid(name, mail) {
    var valid = true;
    $('#name').removeClass('invalid-field');
    $('#email').removeClass('invalid-field');

    if (!name) {
        $('#name').addClass('invalid-field');
        valid = false;
    }

    if (!mail || !mail.match("[^@\s]+@[^@\s]+\.[^@\s]+")) {
        $('#email').addClass('invalid-field');
        valid = false;
    }

    return valid;
}
;

function removeInvalidClass(el) {
    $(el).removeClass('invalid-field');
}