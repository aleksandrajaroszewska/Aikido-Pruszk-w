
$(document).ready(function(){
   
  $(".kanji").mouseenter(function() {
    $(".treining").slideDown();                 
  });
    
    $(".treining").mouseleave(function(){
        $(this).slideUp();
    })
});

