function validation() {
    var date = document.forms["form"]["date"].value;
    var email = document.forms["form"]["email"].value;
    var address = document.forms["form"]["address"].value;
    var number = document.forms["form"]["phone"].value;
    var days1 = document.forms["form"]["days1"].value;
    var days2 = document.forms["form"]["days2"].value;
    var salary = document.forms["form"]["salary"].value;
    
    if (date == "") {
        window.alert("You must enter a birthdate!");
        location.reload(true);
        return false;
    }
    if (email == "") {
        window.alert("You must enter an email!");
        location.reload(true);
        return false;
    }
    if (address == "") {
        window.alert("You must enter an address!");
        location.reload(true);
        return false;
    }
    if (number == "") {
        window.alert("You must enter a phone number!");
        location.reload(true);
        return false;
    }
    else if(isNaN(number) === true){
        window.alert("The phone number can't have letters!");
        location.reload(true);
        return false;
    }
    if (days1 == "") {
        window.alert("This field can't be blank!");
        location.reload(true);
        return false;
    }
    if (days2 == "") {
        window.alert("This field can't be blank!");
        location.reload(true);
        return false;
    }
    if (salary == "") {
        window.alert("You must enter a salary!");
        location.reload(true);
        return false;
    }
    return true;
}
