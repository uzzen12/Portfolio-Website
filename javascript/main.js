function validateForm() { //function for form valiadation
    var fname = document.forms["messageForm"]["firstname"].value;
    var lname = document.forms["messageForm"]["lastname"].value;
    var gender = document.forms["messageForm"]["gender"].value;
    var email = document.forms["messageForm"]["email"].value;
    var message = document.forms["messageForm"]["message"].value;
    if (fname == "" || lname == "" || email == "" || message == "") {
        alert("Empty fields detected. Please fill the form properly.");
    }
    else {
        alert("Thank you. Your information has been received.");
    }
}
