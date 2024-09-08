// // Set the countdown end time (e.g., 112 days from now)
// let countdownEnd = new Date().getTime() + (112 * 24 * 60 * 60 * 1000); // 112 days from now

// // Update the countdown every second
// let countdownTimer = setInterval(function() {
//     // Get the current time
//     let now = new Date().getTime();

//     // Calculate the time difference
//     let timeLeft = countdownEnd - now;

//     // Calculate days, hours, minutes, and seconds left
//     let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
//     let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
//     let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

//     // Add leading zero to minutes and seconds if less than 10
//     minutes = minutes < 10 ? "0" + minutes : minutes;
//     seconds = seconds < 10 ? "0" + seconds : seconds;

//     // Display the result in the HTML element with id="countdown"
//     document.getElementById("countdown").innerHTML = 
//         days + " Days " + hours + " Hrs " + minutes + " Min " + seconds + " Sec";

//     // If the countdown is finished, display a message
//     if (timeLeft < 0) {
//         clearInterval(countdownTimer);
//         document.getElementById("countdown").innerHTML = "Countdown Finished!";
//     }
// }, 1000);
