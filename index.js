'use strict';

window.addEventListener("scroll",myfunk);
//
// let btnModal = document.querySelector(".btn-modal");
//
//
// btnModal.addEventListener("click", myfunk);
//
//
//
//
// function myfunk(){
//
// let inputValue = document.querySelector(".show-modal").value;
//
// inputValue = inputValue * 0.45  ;
// let inputValueWeek = inputValue * 7 ;
// let inputValueMonth = inputValue * 30 ;
// let inputValueYear = inputValue * 365 ;
//
// document.querySelector(".modal").classList.remove("hidden");
//
// document.querySelector(".paragraph").textContent = ` Each day you loose ${inputValue} £ Each week you loose ${inputValueWeek} £  Every month you loose ${inputValueMonth} £  Every year you loose ${inputValueYear} £ `
// console.log(` Each day you loose ${inputValue} £ Each week you loose ${inputValueWeek} £  Every month you loose ${inputValueMonth} £  Every year you loose ${inputValueYear} £ ` );
//
//
// }
//
//

document.querySelector(".about").addEventListener("click", myfunk);

document.querySelector(".home").addEventListener("click", myfunkrev);


function myfunkrev(){
document.querySelector(".main__section").classList.remove("hidden");
setTimeout(function operator (){ document.querySelector(".main__section").classList.remove("display-none");},1200)

setTimeout(function operator (){ document.querySelector(".section__after").classList.add("display-none");},1300)
setTimeout(document.querySelector(".section__after").classList.add("hidden"),1500);

setTimeout(document.querySelector(".section__after").classList.remove("xs"),1600);}



document.querySelector(".btn-small").addEventListener("click", myfunk);


function myfunk(){

document.querySelector(".main__section").classList.add("hidden");
setTimeout(function operator (){ document.querySelector(".main__section").classList.add("display-none");},1200)

setTimeout(function operator (){ document.querySelector(".section__after").classList.remove("display-none");},1300)
setTimeout(document.querySelector(".section__after").classList.remove("hidden"),1500);

setTimeout(document.querySelector(".section__after").classList.add("xs"),1600);}


/// first photo
function myFunctiontext() {document.querySelector(".trash").textContent=("Photo Collection of 2017");
document.querySelector(".trash").classList.add("opacity");
}
function myFunctiontext2() {document.querySelector(".trash").textContent=("");
document.querySelector(".trash").classList.remove("opacity");}
document.querySelector(".section__after__photo__2-2-1").addEventListener("mouseover",myFunctiontext);
document.querySelector(".section__after__photo__2-2-1").addEventListener("mouseout",myFunctiontext2);


/// second photo
function myFunctiontexta() {document.querySelector(".trash").textContent=("Photo Collection of 2018");
document.querySelector(".trash").classList.add("opacity");
}
function myFunctiontext2a() {document.querySelector(".trash").textContent=("");
document.querySelector(".trash").classList.remove("opacity");}
document.querySelector(".section__after__photo__2-2-2").addEventListener("mouseover",myFunctiontexta);
document.querySelector(".section__after__photo__2-2-2").addEventListener("mouseout",myFunctiontext2a);



/// third photo

function myFunctiontextb() {document.querySelector(".trash").textContent=("Photo Collection of 2019");
document.querySelector(".trash").classList.add("opacity");
}
function myFunctiontext2b() {document.querySelector(".trash").textContent=("");
document.querySelector(".trash").classList.remove("opacity");}
document.querySelector(".section__after__photo__2-2-3").addEventListener("mouseover",myFunctiontextb);
document.querySelector(".section__after__photo__2-2-3").addEventListener("mouseout",myFunctiontext2b);




///first photo onclick
document.querySelector(".section__after__photo__2-2-1").addEventListener("click", click1);
document.querySelector(".section__after__photo__2-2-2").addEventListener("click", click1);
document.querySelector(".section__after__photo__2-2-3").addEventListener("click", click1);
let click_1 = document.querySelector(".click");
let click_2 = document.querySelector(".click_2");
let nav = document.querySelector(".navbar");
let white = document.querySelector(".main__section__white");
let main = document.querySelector(".main__section__photo");
let footer = document.querySelector(".footer");

function ok2 () {click_1.classList.add("color-purple")};
function ok3 () {click_1.classList.remove("color-purple")};

function ok4 () {nav.classList.add("color-teal")};
function ok5 () {nav.classList.remove("color-teal")};


function click1(){


click_1.classList.remove("display-none");
footer.classList.remove("display-none");
click_1.scrollIntoView();
nav.classList.add("color-purple");

setTimeout(function (){ click_1.classList.remove("hidden");},600);
setTimeout(function (){ footer.classList.remove("hidden");},600);
}

// nav.addEventListener("mouseover", ok2)
// nav.addEventListener("mouseout", ok3)
//
// nav.addEventListener("mouseover", ok4)
// nav.addEventListener("mouseout", ok5)




// let position = click_2.getBoundingClientRect();
// console.log(position)
//
//
// if (position.top >= 0 && position.bottom <= window.innerHeight){
// console.log(position)
//
// }






function test(){

  let x = document.querySelector(".section__after__trio").getBoundingClientRect();
  console.log(x.top);

  if (x.top > -800){

  nav.classList.remove("color-purple");
  nav.classList.remove("color-teal");
}else {  nav.classList.add("color-purple");}

}


window.addEventListener("scroll", test);

loop();
function loop(){

setTimeout(function(){document.querySelector(".main__section__photo__1").classList.add("hidden");},900);
setTimeout(function(){document.querySelector(".main__section__photo__1").src="img/fashion4.jpg";},2300);
setTimeout(function(){document.querySelector(".main__section__photo__1").classList.remove("hidden");},2400);
setTimeout(function(){document.querySelector(".main__section__photo__1").classList.add("hidden");},4500);
setTimeout(function(){document.querySelector(".main__section__photo__1").src="img/fashion5.jpg";},5900);
setTimeout(function(){document.querySelector(".main__section__photo__1").classList.remove("hidden");},6000);

setTimeout(function(){document.querySelector(".main__section__photo__1").classList.add("hidden");},8000);
setTimeout(function(){document.querySelector(".main__section__photo__1").src="img/fashion.jpg";},9100);


setTimeout(function(){document.querySelector(".main__section__photo__1").classList.remove("hidden");},10200);
setTimeout(function(){document.querySelector(".main__section__photo__1").classList.add("hidden");},12200);
setTimeout(function(){white.classList.remove("display-none");},15400);

setTimeout(function(){loop();},19400);
};



document.querySelector(".ct").addEventListener("click", function(){


document.querySelector(".contact").classList.toggle("display-none");
document.querySelector(".contact").classList.toggle("hidden");
main.classList.toggle("blur");
document.querySelector(".const").classList.toggle("tz");
document.querySelector(".const").classList.toggle("main__section__photo__1");
document.getElementById("overlay").classList.toggle("overlay");



})

document.querySelector(".x").addEventListener("click", function(){

  document.querySelector(".contact").classList.toggle("display-none");
  document.querySelector(".contact").classList.toggle("hidden");
  main.classList.toggle("blur");
  document.querySelector(".const").classList.toggle("tz");
  document.querySelector(".const").classList.toggle("main__section__photo__1");
  document.getElementById("overlay").classList.toggle("overlay");

})

// white.addEventListener("mouseover", test3);
//
//
// function test3() {
//
// document.querySelector(".main__section__photo__1").classList.add("blur");
// white.classList.add("no-blur");
// }

// document.querySelector(".logo__navigation").addEventListener("click", test);
