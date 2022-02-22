let topTitle = document.getElementById("topTitle");
let roller = document.getElementById("roller").children;
let gallery = document.getElementById("gallery");
let photoFilm = document.getElementById("photoFilm");

let rollerIndex=0;
roller[0].style.backgroundColor="black";

setTimeout(()=>{
	this.topTitle.style.opacity="1";
	this.gallery.style.opacity="1";
},500);


function rightArrow(){
	this.photoContainer.scrollBy(photoContainer.offsetWidth,0);
	
	if(rollerIndex+1<roller.length){
		roller[rollerIndex].style.backgroundColor="";
		rollerIndex+=1;
		roller[rollerIndex].style.backgroundColor="black";
	}
	
}
function leftArrow(){
	this.photoContainer.scrollBy(-photoContainer.offsetWidth,0);
	if(rollerIndex-1>=0){
		roller[rollerIndex].style.backgroundColor="";
		rollerIndex-=1;
		roller[rollerIndex].style.backgroundColor="black";
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
let firsTime=true;
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