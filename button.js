$(document).ready(function() {
    $(".mouse").click(function() {
         $('html, body').animate({
             scrollTop: $(".mouse").offset().top
         }, 1200);
     });
    });
    
 // . animate allows me to perform a custom animation from css
 //1500s is the speed.
 //scroll top allows me to set the vertical scroll for the element.
