// Set the date we're counting up from
var countUpDate = new Date("November 1, 2023 00:00:00").getTime();

// Update the count down every 1 second
var y = setInterval(function() {

// Get today's date and time
var now = new Date().getTime();

// Find the distance between now and the count down date
var distance = now - countUpDate;

// Time calculations for days, hours, minutes and seconds
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Display the result in the element with id="demo"
document.getElementById("edric").innerHTML = days + " Days";

// If the count down is finished, write some text
if (distance < 0) {
    clearInterval(y);
    document.getElementById("edric").innerHTML = "NNN is over!!!! Congrats to those who have survived!";
}
}, 1000);