$(document).ready(() => {


  /*
  * Function to pad single digit times
  */
  function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }

  /*
  * Function to show current time
  */
  function showCurrentTime() {
    // Create new date
    var now = new Date(), months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    time = pad(now.getHours(), 2) + ':' + pad(now.getMinutes(), 2),
    date = [months[now.getMonth()], now.getDate() + ",", now.getFullYear()].join(' ');

    var timePic =  (now.getHours() < 17) ? "fa-sun-o" : "fa-moon-o";

    // Seperate date and time with new line
    document.getElementById('current-date').innerHTML = [date, "<i class='fa " + timePic + "' aria-hidden='true'></i>" + "  " + time].join("<br>");

    // Update clock every 1000 ms
    setTimeout(showCurrentTime, 1000);
  }
  // Initial call to showCurrentTIme()
  showCurrentTime();

  /*
  * Toggle clock in/out
  */
  $('.clock-in-out').click(function() {
    if ($('.clock-in-out').text() === ' Clock Out') {
      var vars = ["check", "In", "in"];
    } else {
      var vars = ["times", "Out", "out"];
    }
    $('.clock-in-out').html("<div class='huge'><i class='fa fa-calendar-" + vars[0] + "-o'></i> Clock " + vars[1] + "</div>");
    $('.forgot-punch').html("<div class='small'><i class='fa-exclamation-circle fa' aria-hidden='true'></i>  I forgot to clock " + vars[2] + "!  </div>");
  });

  /*
  * Forgot punch clicked
  */
  $('.forgot-punch').click(function() {
    alert("you done fucked up.");
  });
});
