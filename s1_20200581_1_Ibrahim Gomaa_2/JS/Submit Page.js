function validation() {
    var id = document.forms["form"]["id"].value;
    var sdate = document.forms["form"]["sdate"].value;
    var edate = document.forms["form"]["edate"].value;
    var reason = document.forms["form"]["reason"].value;
    if (id == "") {
        window.alert("You must enter an ID");
        location.reload(true);
        return false;
    }
    if (sdate == "") {
        window.alert("You must enter a start date");
        location.reload(true);
        return false;
    }
    if (edate == "") {
        window.alert("You must enter an end date");
        location.reload(true);
        return false;
    }
    if (reason == "") {
        window.alert("You must enter a reason");
        location.reload(true);
        return false;
    }
    return true;
}