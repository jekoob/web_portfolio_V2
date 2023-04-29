const quotes = ["“Quality is never an accident; it is always the result of intelligent effort.”","“Software never was perfect and won't get perfect."];
let body = document.getElementsByTagName("body")[0];
let bgImg = document.getElementById("bg-img");
let screenWidth = document.getElementsByTagName("body")[0].offsetWidth;
let screenHeight = document.getElementById("bg-img").offsetHeight;
let bug1 = document.getElementsByClassName("bugQoute")[0];   //img of the bug.
let bug2 = document.getElementsByClassName("bugQoute")[1]; 
let wrapeQuoteWidth = document.getElementsByClassName("quote-wrap")[0].offsetWidth; 
let quote = document.getElementById("quote");//div that contain the qoute.
let quoteAngleRight = document.getElementById("angleRight");
let quoteSubAngleRight = document.getElementById("subAngelRight");
let quoteAngleLeft = document.getElementById("angleLeft");
let quoteSubAngleLeft = document.getElementById("subAngeLeft");
let myLinks = document.getElementsByClassName("myLinks");
let cv=document.getElementById("cvLink");

let currentPage="Home";

setTimeout(()=>{
   let count=1;
   setInterval(()=>{
      switch(count){
         case 0:
            quote.innerHTML=quotes[count];
            count++;
            break;           
         case 1:
            quote.innerHTML=quotes[count];
            count=0;
            break;
      }
   },4000);
},0);
quote.innerHTML=quotes[0];

