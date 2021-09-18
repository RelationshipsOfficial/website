

window.onload=function(){
	$("#load").fadeOut();
	$("body").removeClass("hidden");
}

let menu=document.getElementById("menu"),btn__menu=document.getElementById("btn__menu"),icon__hamburger=document.querySelector(".icon__hamburger"),icon__close=document.querySelector(".icon__close");btn__menu.addEventListener("click",()=>{menu.classList.toggle("menu__block"),icon__hamburger.classList.toggle("d-none"),icon__close.classList.toggle("d-block")}),$(document).ready(function(){$(".ir-arriba").click(function(){$("body, html").animate({scrollTop:"0px"},300)}),$(window).scroll(function(){$(this).scrollTop()>0?$(".ir-arriba").slideDown(300):$(".ir-arriba").slideUp(300)})});