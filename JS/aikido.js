
$(document).ready(function(){
   
   $(".photos").find(".childrenButton").on( "click", function(){
       $(this).toggleClass("buttonColor");
       $(".children").find("img").toggleClass("hidden");
   }); 
    
     $(".photos").find(".adultsButton").on( "click", function(){
       $(this).toggleClass("buttonColor");
       $(".adults").find("img").toggleClass("hidden");
   }); 
   
     $(".photos").find(".restButton").on( "click", function(){
       $(this).toggleClass("buttonColor");
       $(".rest").find("img").toggleClass("hidden");
   }); 
});

