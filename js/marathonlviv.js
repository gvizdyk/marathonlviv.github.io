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
  var futureDate  = new Date("April 24, 2016 02:00 AM EDT");
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
    // items: 2,
    loop:true,
    margin:30,
    nav:true,
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

  // **
  // * Google Analytics
  // **
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-65285012-2', 'auto');
  ga('send', 'pageview');

});
