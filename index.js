const quotes = ["“Quality is never an accident; it is always the result of intelligent effort.”",
                "“Software never was perfect and won't get perfect."];

let screenWidth = document.getElementsByTagName("body")[0].offsetWidth;
let screenHeight = document.getElementById("bg-img").offsetHeight;
let bug = document.getElementsByClassName("bugQoute")[0];   //img of the bug.
// outter qoute container that contains the "qoute"div and angle div.
let wrapeQuoteWidth = document.getElementsByClassName("quote-wrap")[0].offsetWidth; 
let quote = document.getElementById("quote");//div that contain the qoute.
//div that responsible for tendency of the bottom border  
let quoteAngle = document.getElementsByClassName("angle")[0];
let myLinks = document.getElementsByClassName("myLinks");
let cv=document.getElementById("cvLink");
let popUpBox = document.getElementById("popUpBox");
let value = popUpBox.offsetTop;
let counPop=0,counPop1=0;
function popUpEmail(){
   let value1=popUpBox.offsetTop;
   
   if(value1>=value && counPop1==0  ){
   console.log(value1);
   let email = document.createElement("P");
   email.innerHTML="yakov.sachuk@gmail.com";
   popUpBox.appendChild(email);
   popUpBox.style.bottom="70px";
   counPop++;
   }

   else{
      if(counPop1==1){
         popUpBox.style.bottom="-100px";
         setTimeout(() => {
            popUpBox.removeChild(popUpBox.lastElementChild); 
            let email = document.createElement("P");
            email.innerHTML="yakov.sachuk@gmail.com";
            popUpBox.appendChild(email);
            popUpBox.style.bottom="70px";
         }, 500);
         counPop++;
         counPop1=0;
      }
      else{
         popUpBox.style.bottom="-100px";
      setTimeout(() => {
         popUpBox.removeChild(popUpBox.lastElementChild); 
      }, 500);
      counPop=0;
   }
      }

};

function popUpPhone(){
   let value1=popUpBox.offsetTop;
   
   if(value1>=value && counPop==0 ){
   console.log(value1);
   let phone = document.createElement("P");
   phone.innerHTML="0587846888";
   popUpBox.appendChild(phone)
   popUpBox.style.bottom="70px";
   counPop1++;
   }

   else{
      if(counPop==1){
         popUpBox.style.bottom="-100px";
         setTimeout(() => {
            popUpBox.removeChild(popUpBox.childNodes[0]);
            let phone = document.createElement("P");
            phone.innerHTML="0587846888";
            popUpBox.appendChild(phone)
            popUpBox.style.bottom="70px"; 
         }, 500);
        counPop1++;
        counPop=0;
      }
      else{
      console.log(value1);
      
      popUpBox.style.bottom="-100px";
      setTimeout(() => {
         popUpBox.removeChild(popUpBox.childNodes[0]); 
      }, 500);
      counPop1=0;
   }
     
 
   }
};

// fitting the length of the trail for the bug
bug.style.transform = "translateX(-"+(screenWidth*2)+"px)"; 
bug.style.transitionDuration="1.5s";
setTimeout(() => {
  
   bug.style.opacity=1;
   bug.style.transform = "translateX("+(wrapeQuoteWidth+120)+"px)";
   quote.innerHTML=quotes[0];
   quote.style.opacity=1;
   quoteAngle.style.opacity=1;
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
      bug.style.transform = "translateX("+(wrapeQuoteWidth-100)+"px)";
      quote.innerHTML=quotes[1];
      setTimeout(() => {
         quote.style.opacity=1;
         quote.style.transitionDuration="300ms";
         quoteAngle.style.opacity=1;
         quoteAngle.style.transform="translateX("+(-150)+"px) scaleX(-1)";
      }, 1000);
    
      count++;
   }
   else{
      bug.style.transform = "translateX("+(wrapeQuoteWidth+120)+"px)";
      quoteAngle.style.transform="translateX("+0+"px) scaleX(1)";
      quote.style.transitionDuration="0ms";
      quote.style.opacity=0;
      quoteAngle.style.opacity=0;
      quote.innerHTML=quotes[0];

      setTimeout(() => {
         quote.style.opacity=1;
         quote.style.transitionDuration="300ms";
         quoteAngle.style.opacity=1;
         quoteAngle.style.transform="translateX("+(0)+"px) scaleX(1)";
      }, 1100);
      count++;
   }
}, 5000);

function slideBlankUp(){
   myLinks[2].style.opacity="0";
   let blankUp = document.createElement("div");
   blankUp.setAttribute("class","blank");
   blankUp.setAttribute("id","blankUp");
   document.getElementsByTagName("body")[0].appendChild(blankUp);
   setTimeout(function(){
      blankUp.style.height=screenHeight+"px";
   },500);
}

function slideBlankRight(){
   myLinks[0].style.opacity="0";
   let blankRight = document.createElement("div");
   blankRight.setAttribute("class","blank");
   blankRight.setAttribute("id","blankRight");
   document.getElementsByTagName("body")[0].appendChild(blankRight);
   setTimeout(function(){
      blankRight.style.width=screenWidth+"px";
   },500); 
}

function slideBlankLeft(){
   myLinks[1].style.opacity="0";
   let blankLeft = document.createElement("div");
   blankLeft.setAttribute("class","blank");
   blankLeft.setAttribute("id","blankLeft");
   document.getElementsByTagName("body")[0].appendChild(blankLeft);
   setTimeout(function(){
      blankLeft.style.width=screenWidth+"px";
   },500);
}