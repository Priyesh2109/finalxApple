$(document).ready(function() {
    $(".down").click(function() {
         $('html, body').animate({
             scrollTop: $(".down").offset().top
         }, 1500);
     });
    });
    
 