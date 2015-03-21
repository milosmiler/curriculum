 

//  (function($){

// 	"use strict";

// 	$(function(){

// 		$(document).ready(function() {
//    			alert("jQuery esta funcionando !!");
//  				});

// 	});


// });

 $(document).ready(function() {

 	$('#irinicio').click(function () {
     $('html, body').animate({ scrollTop: '0px'}, 1000);
     return false;
   });
   
 });


$(document).ready(function() {
	$("a").on("click",function(){
   if(this.hash){
      //console.log($(this).attr('href'));
      $("html body").animate({"scrollTop":$($(this).attr('href')).offset().top-82},1500);
      return false;
         }
	});
});


$(document).ready(function() {
  $( ".menu" ).click(function() {
    $( ".submenu" ).toggle("slow");
  });
});





 