const quotes = ["“Quality is never an accident; it is always the result of intelligent effort.”",
                "“Software never was perfect and won't get perfect."];
let body = document.getElementsByTagName("body")[0];
let bgImg = document.getElementById("bg-img");
let screenWidth = document.getElementsByTagName("body")[0].offsetWidth;
let screenHeight = document.getElementById("bg-img").offsetHeight;
let bug = document.getElementsByClassName("bugQoute")[0];   //img of the bug.

// outter qoute container that contains the "qoute"div and angle div.
let wrapeQuoteWidth = document.getElementsByClassName("quote-wrap")[0].offsetWidth; 
let quote = document.getElementById("quote");//div that contain the qoute.
let quoteAngle = document.getElementsByClassName("angle")[0];
let quoteSubAngle = document.getElementsByClassName("subAngel")[0];
let myLinks = document.getElementsByClassName("myLinks");
let cv=document.getElementById("cvLink");

let currentPage="Home";


// fitting the length of the trail for the bug
bug.style.transform = "translateX(-"+(screenWidth/2)+"px)"; 
bug.style.transitionDuration="1.5s";
setTimeout(() => {
  
   bug.style.opacity=1;
   bug.style.transform = "translateX("+(wrapeQuoteWidth+120)+"px)";
   quote.innerHTML=quotes[0];
   quote.style.opacity=1;
   quoteAngle.style.opacity=1;
   quoteSubAngle.style.opacity=1;
}, 200);


let count =1;
setInterval(()=>{
   
   if(count%2!=0){
      quote.style.transitionDelay="0s";
      quote.style.transitionDuration="0ms";
      quote.style.opacity=0;
      quoteAngle.style.transitionDelay="0s";
      quoteAngle.style.transitionDuration="0s";
      quoteAngle.style.opacity=0;

      quoteSubAngle.style.transitionDelay="0s";
      quoteSubAngle.style.transitionDuration="0s";
      quoteSubAngle.style.opacity=0;

      bug.style.transform = "translateX("+(wrapeQuoteWidth-100)+"px)";
      quote.innerHTML=quotes[1];


      setTimeout(() => {
         quote.style.opacity=1;
         quote.style.transitionDuration="300ms";
         quoteAngle.style.opacity=1;
         quoteAngle.style.transform="translateX("+(-150)+"px) scaleX(-1)";
         quoteSubAngle.style.opacity=1;
         quoteSubAngle.style.transform="translateX("+(-150)+"px) scaleX(-1)";
      }, 1450);
    
      count++;
   }
   else{
      bug.style.transform = "translateX("+(wrapeQuoteWidth+120)+"px)";
      quoteAngle.style.transform="translateX("+0+"px) scaleX(1)";
      quoteSubAngle.style.transform="translateX("+0+"px) scaleX(1)";
      quote.style.transitionDuration="0ms";
      quote.style.opacity=0;
      quoteAngle.style.opacity=0;
      quoteSubAngle.style.opacity=0;
      quote.innerHTML=quotes[0];

      setTimeout(() => {
         quote.style.opacity=1;
         quote.style.transitionDuration="300ms";
         quoteAngle.style.opacity=1;
         quoteSubAngle.style.opacity=1;
         quoteAngle.style.transform="translateX("+(0)+"px) scaleX(1)";
         quoteSubAngle.style.transform="translateX("+(0)+"px) scaleX(1)";
      }, 1450);
      count++;
   }
}, 5000);

