function validate(){
    var name = document.forms["contact"]["name"].value;
    if (name == ""){
        alert("Name is a required field.");
        document.forms["contact"]["name"].focus();
        return false;
    }

    var email = document.forms["contact"]["email"].value;
    if (email == ""){
        alert("Email is a required field.");
        document.forms["contact"]["email"].focus();
        return false;
    }
    atPosition = email.indexOf("@");
    dotPosition = email.indexOf(".");
    if (atPosition < 1 || (dotPosition - atPosition < 2)){
        alert("Email entered in incorrect format.");
        document.forms["contact"]["email"].focus();
        return false;
    }

    var phone = document.forms["contact"]["phone"].value;
    if (phone == ""){
        alert("Phone is a required field.");
        document.forms["contact"]["phone"].focus();
        return false;
    }

    alert("Thank you for contacting us! We will reach out to you as soon as possible regarding your message.")
}