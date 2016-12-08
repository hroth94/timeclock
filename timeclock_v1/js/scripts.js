$(document).ready(() => {

  $('.clock-in-out').click(function() {
    if ($('.clock-in-out').text() === ' Clock Out') {
        $(`[name="clock-in-out"]`).html("<div class='huge'><i class='fa fa-calendar-check-o'></i> Clock In</div>");
    } else {
        $(`[name="clock-in-out"]`).html("<div class='huge'><i class='fa fa-calendar-times-o'></i> Clock Out</div>");
    }
  });
});
