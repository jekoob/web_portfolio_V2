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