let pagesName = ["FrontEnd","Home","Automation"];
let listNav = document.getElementById("listNav").children;
let previous = null;
let firstTime=true;
function openDocx(){
   window.open("Yakov Sachuk CV.pdf","viewer"); 
}

function slideHome(event){
 if(currentPage != event.textContent){
    for(let i=0;i<pagesName.length;i++){
                if(pagesName[i]==currentPage){
               previous = pagesName[i];
               console.log(previous);
               listNav[i].classList.remove("currentPage");
               console.log(currentPage);
               break;
         }
      }
      document.getElementById("shell").style.display="block";
      listNav[1].setAttribute("class","currentPage");
      let blankUp = document.createElement("div");
      blankUp.setAttribute("class","blank");
      blankUp.setAttribute("id","blankUp");
      let bg_img = document.createElement("div");
      bg_img.setAttribute("id","bg-shadow");
      blankUp.appendChild(bg_img);
      blankUp.style.backgroundImage="url('img/testing.png')";
      document.getElementsByTagName("body")[0].appendChild(blankUp);
      setTimeout(function(){
         blankUp.style.height="100%";
      },500);
      // setTimeout(function(){
         
      //    if(currentPage == "Home" && previous =="FrontEnd" || previous =="Automation"){
      //       if(previous =="FrontEnd" && firstTime==false){
      //          listNav[0].classList.remove("currentPage");
      //          console.log(firstTime);
      //          document.getElementById("blankRight").remove();
      //       }
      //       else if(previous =="Automation" && firstTime==false){
      //          listNav[2].classList.remove("currentPage");
      //          console.log(firstTime);
      //          document.getElementById("blankLeft").remove();
      //       }
      //    }
      //    firstTime=false;
      //    currentPage=event.textContent;
      //   document.getElementById("shell").style.display="none";
      // },1000);
      setTimeout(function(){
         window.open("index.html","_self");
      },1200);
   }
     
      return;
}

function slideBlankRight(event){
    
   if(currentPage != event.textContent){
      console.log("event : "+event.textContent);
    for(let i=0;i<pagesName.length;i++){
         if(pagesName[i]==currentPage){
               previous = pagesName[i];
               console.log("previous : "+previous);
               listNav[i].classList.remove("currentPage");
               currentPage=event.textContent;
               console.log("cuurentPage : "+currentPage);
               break;
         }
      }
      document.getElementById("shell").style.display="block";
      listNav[0].setAttribute("class","currentPage");
      let blankRight = document.createElement("div");
      blankRight.setAttribute("class","blank");
      blankRight.setAttribute("id","blankRight");
      blankRight.style.backgroundImage="url('img/front.jpg')";
      document.getElementsByTagName("body")[0].appendChild(blankRight);
      setTimeout(function(){
         blankRight.style.width="100%";
      },500);
      // setTimeout(function(){
      //    if(currentPage == "FrontEnd" && previous =="Automation" || previous=="Home"){
      //        if(previous =="Automation" && firstTime==false){
      //          listNav[2].classList.remove("currentPage");
      //          document.getElementById("blankLeft").remove();
      //       }
      //       else if(previous =="Home" && firstTime==false){
      //          listNav[1].classList.remove("currentPage");
      //          document.getElementById("blankUp").remove();
      //       }

      //    }
      //    firstTime=false;
      //    currentPage=event.textContent;
      //    document.getElementById("shell").style.display="none";
      // },1000);
      setTimeout(function(){
         window.open("frontEndPage.html","_self");
      },1350);
      return;
   }
}

function slideBlankLeft(event){
    
   
   if(currentPage != event.textContent){
      for(let i=0;i<pagesName.length;i++){
         if(pagesName[i]==currentPage){
               previous = pagesName[i];
               console.log(previous);
               listNav[i].classList.remove("currentPage");
               currentPage=event.textContent;
               console.log(currentPage);
               break;
         }
      }
   listNav[2].setAttribute("class","currentPage");
   document.getElementById("shell").style.display="block";
   console.log(currentPage);
   let blankLeft = document.createElement("div");
   blankLeft.setAttribute("class","blank");
   blankLeft.setAttribute("id","blankLeft");
   blankLeft.style.backgroundImage="url('img/autoPro.jpg')";
   document.getElementsByTagName("body")[0].appendChild(blankLeft);
   setTimeout(function(){
         blankLeft.style.width="100%";
      },500)
   // setTimeout(function(){
      //myLinks[1].style.opacity="1";
   //  document.getElementById("shell").style.display="none";
   //  if(currentPage == "Automation" && previous =="FrontEnd" || previous=="Home" ){
   //       if(previous =="FrontEnd" && firstTime==false){
   //          listNav[0].classList.remove("currentPage");
   //          document.getElementById("blankRight").remove();
   //       }
   //       else if(previous =="Home" && firstTime==false){
   //          listNav[1].classList.remove("currentPage");
   //          document.getElementById("blankUp").remove();
   //       }
   //    }
   //    firstTime=false;
   //    currentPage=event.textContent;
   // },1000);
   setTimeout(function(){
      window.open("autoProPage.html","_self");
   },1350);
   return;
   }

}



let popUpBox = document.getElementById("popUpBox");
let contactIcons=[
{
   "elementId":document.getElementById("email").getAttribute("id"),
   "contactDetail":"yakov.sachuk@gmail.com",
},
{  
   "elementId":document.getElementById("phone").getAttribute("id"),
   "contactDetail":"0587846888",
}];
let firsTime1=true;
let previousContactLink={
   elementId:null,
   contactDetail:null
};
function popUpContact(el){
   $(shell).on("click",(event)=>{
      let pointLog=event.target;
      if(document.getElementById(contactIcons[0].elementId).target!=pointLog&&
         document.getElementById(contactIcons[1].elementId).target!=pointLog){
            popUpBox.style.bottom="0";
            firsTime1=true;
            shell.style.display="none";
            return;
      }
   });
   contactIcons.forEach(icon=>{
      if(icon.elementId==el.getAttribute("id")&&firsTime1==true){
         previousContactLink.elementId=icon.elementId;
         previousContactLink.contactDetail=icon.contactDetail;
         popUpBox.innerHTML=icon.contactDetail;
          setTimeout(()=>{
            popUpBox.style.bottom="70px";
         },200);
          shell.style.display="block";
          firsTime1=false;
      }
      else if(firsTime1==false){
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