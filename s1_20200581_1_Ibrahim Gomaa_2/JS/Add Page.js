function validation() {
    var name = document.forms["form"]["name"].value;
    var email = document.forms["form"]["email"].value;
    var number = document.forms["form"]["number"].value;
    var id = document.forms["form"]["id"].value;
    var address = document.forms["form"]["address"].value;
    var salary = document.forms["form"]["salary"].value;
    var days1 = document.forms["form"]["days1"].value;
    var days2 = document.forms["form"]["days2"].value;
    var date = document.forms["form"]["date"].value;
    if (name == "") {
        window.alert("You must enter a name!");
        return false;
    }
    else if(isNaN(name) === false){
        window.alert("The name can't have numbers!");
        location.reload(true);
        return false;
    }
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
    if (number == "") {
        window.alert("You must enter a phone number!");
        location.reload(true);
        return false;
    }
    if (id == "") {
        window.alert("You must enter an ID!");
        location.reload(true);
        return false;
    }
    if (address == "") {
        window.alert("You must enter an address!");
        location.reload(true);
        return false;
    }
    if (salary == "") {
        window.alert("You must enter a salary!");
        location.reload(true);
        return false;
    }
    if (days1 == "") {
        window.alert("This field can't be blank");
        location.reload(true);
        return false;
    }
    if (days2 == "") {
        window.alert("This field can't be blank");
        location.reload(true);
        return false;
    }
    return true;
}

