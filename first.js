function validateDate() {
    //alert("hello")
    var yyyy = document.getElementById("year").value;
    var dd = document.getElementById("day").value
    var mm = document.getElementById("month").value;

    var leap = (yyyy % 4);
    var msg = "";

    if (isNaN(yyyy) || isNaN(mm) || isNaN(dd)) {
        msg += "not numeric value";
    }
    if (mm < 1 || mm > 12) {
        msg += "month range wrong"
    }
    if (mm == 02) {
        if (
            (leap == 0 && (dd < 1 || dd > 29)) ||
            (leap != 0 && (dd < 1 || dd > 28))
        ) {
            msg += "Date range for february wrong";
        }
    }
    if (
        (mm == 01 || mm == 03 || mm == 05 || mm == 07 || mm == 08 || mm == 10 || mm == 12)
        &&
        (dd < 01 || dd > 31)
    ) {
        //console.log(mm + " " + dd)
        msg += "Date range wrong for 31 days wrong";
    }
    else if ((mm == 04 || mm == 06 || mm == 09|| mm == 11) &&
        (dd < 1 || dd > 30)
    ) {
        msg += "Date range for 30 days wrong";
    }
    if(msg ==""){
        msg = "Valid Date"
    }
    //console.log(msg)
    document.getElementById('message').innerText=msg;  

}