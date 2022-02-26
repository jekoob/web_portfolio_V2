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
//div that responsible for tendency of the bottom border  
let quoteAngle = document.getElementsByClassName("angle")[0];
let myLinks = document.getElementsByClassName("myLinks");
let cv=document.getElementById("cvLink");
let popUpBox = document.getElementById("popUpBox");
console.log(myLinks);
let contactIcons=[
{
   "elementId":document.getElementById("email").getAttribute("id"),
   "contactDetail":"yakov.sachuk@gmail.com",
},
{  
   "elementId":document.getElementById("phone").getAttribute("id"),
   "contactDetail":"0587846888",
}];
let firsTime=true;
let previousContactLink={
   elementId:null,
   contactDetail:null
};

function popUpContact(el){
   
   
 
   //shell.style.height=screenHeight;
   $(shell).on("click",(event)=>{
      let pointLog=event.target;
      if(document.getElementById(contactIcons[0].elementId).target!=pointLog&&
         document.getElementById(contactIcons[1].elementId).target!=pointLog){
            popUpBox.style.bottom="0";
            firsTime=true;
            shell.style.display="none";
            return;
      }
   });
   contactIcons.forEach(icon=>{
      if(icon.elementId==el.getAttribute("id")&&firsTime==true){
         previousContactLink.elementId=icon.elementId;
         previousContactLink.contactDetail=icon.contactDetail;
         popUpBox.innerHTML=icon.contactDetail;
          setTimeout(()=>{
            popUpBox.style.bottom="70px";
         },200);
          shell.style.display="block";
          firsTime=false;
      }
      else if(firsTime==false){
        if(el.getAttribute("id")!==previousContactLink.elementId&&icon.elementId==el.getAttribute("id")){
            popUpBox.style.bottom="0";
            previousContactLink.elementId=icon.elementId;
            previousContactLink.contactDetail=icon.contactDetail;
                  setTimeout(()=>{
            popUpBox.innerHTML=icon.contactDetail;
            popUpBox.style.bottom="70px";
         },400);
        } 
      }
   });

}

// fitting the length of the trail for the bug
bug.style.transform = "translateX(-"+(screenWidth/2)+"px)"; 
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

let pagesName = ["FrontEnd","Home","Automation"];
let currentPage="Home";
let listNav = document.getElementById("listNav").children;

function openDocx(){
   window.open("Yakov Sachuk CV.docx","viewer"); 
}
function slideHome(event){
    if(currentPage!=event.textContent){
     document.getElementById("shell").style.display="block";
     document.getElementsByClassName("blank")[0].style.width="0";
     document.getElementsByClassName("currentPage")[0].classList.remove("currentPage");
     listNav[1].setAttribute("class","currentPage");
     currentPage=event.textContent;
     setTimeout(function(){
      document.getElementsByClassName("blank")[0].remove();
       document.getElementById("shell").style.display="none";
     },1000);
    }
}

function slideBlankLeft(event){
    
   
   if(currentPage != event.textContent){
      for(let i=0;i<pagesName.length;i++){
         if(pagesName[i]==currentPage){
            listNav[i].classList.remove("currentPage");
         }
      }
      listNav[2].setAttribute("class","currentPage");
      document.getElementById("shell").style.display="block";
      console.log(currentPage);
         myLinks[1].style.opacity="0";
   let blankLeft = document.createElement("iframe");
   blankLeft.setAttribute("class","blank");
   blankLeft.setAttribute("id","blankLeft");
   blankLeft.setAttribute("src","autoProPage.html");
   document.getElementsByTagName("body")[0].appendChild(blankLeft);
   setTimeout(function(){
      if(currentPage == "FrontEnd"){
         document.getElementById("blankRight").remove();
      }
      blankLeft.style.width="100%";
      currentPage=event.textContent;
      myLinks[1].style.opacity="1";
      document.getElementById("shell").style.display="none";
   },500);
   return;
   }

}

function slideBlankRight(event){
    
   if(currentPage != event.textContent){
    for(let i=0;i<pagesName.length;i++){
         if(pagesName[i]==currentPage){
            listNav[i].classList.remove("currentPage");
         }
      }
      document.getElementById("shell").style.display="block";
      listNav[0].setAttribute("class","currentPage");
      myLinks[0].style.opacity="0";
      let blankRight = document.createElement("iframe");
      blankRight.setAttribute("class","blank");
      blankRight.setAttribute("id","blankRight");
      blankRight.setAttribute("src","frontEndPage.html");
      document.getElementsByTagName("body")[0].appendChild(blankRight);
      setTimeout(function(){
         if(currentPage == "Automation"){
            listNav[1].classList.remove("currentPage");
            document.getElementById("blankLeft").remove();
         }
         blankRight.style.width="100%";
         currentPage=event.textContent;
         myLinks[0].style.opacity="1";
         document.getElementById("shell").style.display="none";
      },500);
      return;
   }
}