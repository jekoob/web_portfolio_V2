let topTitle = document.getElementById("topTitle");
let roller = document.getElementById("roller").children;
let gallery = document.getElementById("gallery");
let photoFilm = document.getElementById("photoFilm");
let currentPage = "FrontEnd"; 
let proggressList=[
	{ name:"hungman", js:"70.7%" , css:"23.8%" , html:"5.6%" },
	{ name:"battle - ship", js:"92.7%" , css:"4.5%" , html:"2.8%" }
]
let rollerIndex=0;
roller[0].style.backgroundColor="black";

setTimeout(()=>{
	this.topTitle.style.opacity="1";
	this.gallery.style.opacity="1";
	$("#proTitle").text(proggressList[0].name);
},500);


function rightArrow(){
	this.photoContainer.scrollBy(photoContainer.offsetWidth+10,0);
	
	if(rollerIndex+1<roller.length){
		roller[rollerIndex].style.backgroundColor="";
		rollerIndex+=1;
		roller[rollerIndex].style.backgroundColor="black";
	}
	
}
function leftArrow(){
	this.photoContainer.scrollBy(-photoContainer.offsetWidth-10,0);
	if(rollerIndex-1>=0){
		roller[rollerIndex].style.backgroundColor="";
		rollerIndex-=1;
		roller[rollerIndex].style.backgroundColor="black";
	}
	
}

class Item{
	constructor(js,css,html){
		this.js=js;
		this.css=css;
		this.html=html;
	}
}