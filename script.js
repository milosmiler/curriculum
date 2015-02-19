 

 (function($){

	"use strict";

	$(function(){


$("a").on("click",function(){
   if(this.hash){
      //console.log($(this).attr('href'));
      $("html body").animate({"scrollTop":$($(this).attr('href')).offset().top-82},1400);
      return false;
         }
});

$(document).ready(function(){
   var $win = window;
   var $pos = 40;

   $(window).scroll(function(){
      if($(this).scrollTop() > $pos){
         $("a.to-top").css("opacity","1");
         $("header").css("box-shadow","2px 5px 20px rgb(14,62,146,0.5)");
      }else{
         $("a.to-top").css("opacity","0");
         $("header").css("box-shadow","1px 2px 1px transparent");
      }
   })
});

$(".to-top").on("click",function(){
   $("html, body").animate({scrollTop:0},"slow");
});




	});


});