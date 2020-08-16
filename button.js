$(document).ready(function() {
    $(".mouse").click(function() {
         $('html, body').animate({
             scrollTop: $(".mouse").offset().top
         }, 1500);
     });
    });
    
 