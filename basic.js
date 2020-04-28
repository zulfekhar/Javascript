setInterval(showTime, 500);
// setInterval calls showTime function with 500ms gap interval
function showTime() {
    var present_time = new Date(); //Date is a special method we use to get timezone date and time
    var hours = present_time.getHours(); //get hours is a method
    var minutes = present_time.getMinutes(); //get hours is a method
    var seconds = present_time.getSeconds(); //get hours is a method
    var meredian = 'AM'  //to display AM or PM

    //if time is greater than 12, we have to make it PM
    if (hours > 12) {
        meredian = 'PM'
    }

    //to display in 12 hours format
    if (hours > 12) {
        hours = hours - 12;
    }

    if (hours == 0) {
        hours = 12;
    }


    // adding 0 to single digits
    if (hours < 10) {
        hours = '0' + hours;
    }

    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    // taking html id and adding text to html dynamically using concatenation
    document.getElementById('displaytime').innerHTML = hours + ':' + minutes + ':' + seconds + ' ' + meredian
}