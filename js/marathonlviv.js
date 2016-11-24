var clock;
$(document).ready(function() {
  // **
  // * Header for full page
  // **
  $(window).resize(function() {
      $('header.front-page').css("min-height", function() {
          return $(window).height();
      });
  });
  $(window).trigger('resize');

  // **
  // * Setting flipclock.js
  // **
  // Set dates.
  var futureDate  = new Date("April 23, 2017 02:00 AM EDT");
  var currentDate = new Date();
  // Calculate the difference in seconds between the future and current date
  var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
  // Calculate day difference and apply class to .clock for extra digit styling.
  function dayDiff(first, second) {
    return (second-first)/(1000*60*60*24);
  }
  if (dayDiff(currentDate, futureDate) < 100) {
    $('.clock').addClass('twoDayDigits');
  } else {
    $('.clock').addClass('threeDayDigits');
  }
  if(diff < 0) {
    diff = 0;
  }
  // Instantiate a coutdown FlipClock
  clock = $('.clock').FlipClock(diff, {
    clockFace: 'DailyCounter',
    language: 'ua',
    countdown: true
  });


  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    dots:false,
    responsive:{
      0:{
          items:1
      },
      480:{
          items:2
      },
      768:{
          items:4
      },
      1200:{
          items:5
      }
    }
  });

});
