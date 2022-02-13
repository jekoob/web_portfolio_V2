const quotes = ["“Quality is never an accident; it is always the result of intelligent effort.”",
                "“Software never was perfect and won't get perfect."];

let screenWidth = document.getElementsByTagName("body")[0].offsetWidth;
let screenHeight = document.getElementsByTagName("body")[0].offsetHeight;
let bug = document.getElementsByClassName("bugQoute")[0];
let wrapeQuoteWidth = document.getElementsByClassName("quote-wrap")[0].offsetWidth;
let quote = document.getElementById("quote");
let quoteAngle = document.getElementsByClassName("angle")[0];


const arrowUp = document.getElementById("myCanvas");
console.log(wrapeQuoteWidth,screenWidth);
bug.style.transform = "translateX(-"+(screenWidth*2)+"px)";
bug.style.transitionDuration="1.5s";

/*function toarrowUp(){
   arrowUp.style.borderRight=screenWidth/2+"px solid transparent";
   arrowUp.style.borderLeft=screenWidth/2+"px solid transparent";
}*/
var canvasElement = document.querySelector("#myCanvas");
var context = canvasElement.getContext("2d");
context.beginPath();
context.moveTo(0, 150);
context.lineTo(150, 0);
context.lineTo(300, 150);
context.moveTo(0, 150);
context.closePath();
context.fillStyle = "cadetblue";
context.fill();

//create wrapper elemt for works grid.
var myWorks = document.getElementById("myWorks");
let div = document. createElement("div");
div.setAttribute("class","wrapper");
myWorks.appendChild(div);

var link = document.createElement("a");
link.setAttribute("href","https://jekoob.github.io/Hangman/");
var workCart = document.createElement("div");
workCart.setAttribute("class","workCart");
document.getElementsByClassName("wrapper")[0].appendChild(workCart);
document.getElementsByClassName("workCart")[0].appendChild(link);


function rotateIcon(){
   let WorkIcon=document.getElementById("workIcon");
   WorkIcon.style.transform="rotate(25deg)";
   WorkIcon.style.opacity=0;
   let container = document.getElementById("container");
  
   setTimeout(() => {
      WorkIcon.style.height=0;
      WorkIcon.style.width=0;
      WorkIcon.style.margin=0;
      document.getElementById("innerContainer").style.height="102%";
      document.getElementById("myCanvas").style.background="cadetblue";
   }, 700);
   
   setTimeout(() => {
      document.getElementsByClassName("workCart")[0].style.border="2px black solid";
      document.getElementsByClassName("workCart")[0].style.width= "90%" ;
      document.getElementsByClassName("workCart")[0].setAttribute("id","work1");
   }, 1500);
}


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
//toarrowUp();

//live icon
let iconPosition = 2;
let WorkIcon=document.getElementById("workIcon");
