//document.getElementById('heading-text').style.color='green';
//$.("heading-text").html("neeee");
"use strict";
$("#heading-text").hide(0);
$("#heading-text").fadeIn("slow","swing");

$("#scroll").click(function(){
console.log($(this).attr("href").offset().top);
  //var offset=$("this").attr("href").offest().top;
  $("heml,body").animate({
    opacity:0.25,
    //scrollTop: offset

  },500);
  return false;
})
