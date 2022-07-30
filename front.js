let topTitle = document.getElementById("topTitle");
let roller = document.getElementById("roller").children;
let gallery = document.getElementById("gallery");
let photoFilm = document.getElementById("photoFilm");
const jsPortion = document.querySelector("#js .portion");
const jsTrail = document.querySelector("#js .trail")
const cssPortion = document.querySelector("#css .portion");
const cssTrail = document.querySelector("#css .trail");
const htmlPortion = document.querySelector("#html .portion");
const htmlTrail = document.querySelector("#html .trail");
const proggressTrail = document.querySelector("#proggressTrail");
const noteBtn = document.getElementsByClassName("noteBtn");
let currentPage = "FrontEnd"; 
let proNum = 0;
let proggressList=[
	{ name:"Hungman", js:70, css:23.8, html:5.6, paint:"white"},
	{ name:"Battleship", js:76 , css:4 , html:20 ,paint:"white" },
	{ name:"My vocabulary", js:82 , css:8 , html:10 ,paint:"black" },
	{ name:"JS Quiz", js:50 , css:30 , html:20 ,paint:"white" }
]
let rollerIndex=0;
roller[0].style.backgroundColor="black";

setTimeout(()=>{
	this.topTitle.style.opacity="1";
	this.gallery.style.opacity="1";
	setProgress(proNum);
},500);


function rightArrow(){
	this.photoContainer.scrollBy(photoContainer.offsetWidth+10,0);
	
	if(rollerIndex+1<roller.length){
		roller[rollerIndex].style.backgroundColor="";
		rollerIndex+=1;
		roller[rollerIndex].style.backgroundColor="black";
		proNum++;
		setProgress(proNum);
	}
	
}
function leftArrow(){
	this.photoContainer.scrollBy(-photoContainer.offsetWidth-10,0);
	if(rollerIndex-1>=0){
		roller[rollerIndex].style.backgroundColor="";
		rollerIndex-=1;
		roller[rollerIndex].style.backgroundColor="black";
		proNum--;
		setProgress(proNum);
	}
	
}
function setPrecentagePortion(indx){
	countJs=0;
	countCss=0;
	countHtml=0;
	let intervalJs = setInterval(()=>{
		if(countJs<proggressList[indx].js){
			jsPortion.innerHTML= countJs+"%";
			jsTrail.style.width=countJs+"%";
			console.log(countJs+"%");
		}
		else{
			clearInterval(intervalJs);
		}
		countJs++;
	},2);

	let intervalCss = setInterval(()=>{
		if(countCss<proggressList[indx].css){
			cssPortion.innerHTML= countCss+"%";
			cssTrail.style.width=countCss+"%";
			console.log(countCss+"%");
		}
		else{
			clearInterval(intervalCss);
		}
		countCss++;
	},2);
	let intervalHtml = setInterval(()=>{
		if(countHtml<proggressList[indx].html){
			htmlPortion.innerHTML= countHtml+"%";
			htmlTrail.style.width=countHtml+"%";
			console.log(countHtml+"%");
		}
		else{
			clearInterval(intervalHtml);
		}
		countHtml++;
	},2);
}

function setProgress(index){
	document.querySelector(".theTitle").classList.add("faid");
	document.querySelector(".theTitle").innerHTML=proggressList[index].name;
	setPrecentagePortion(index);
	proggressTrail.style.color=proggressList[index].paint;
	for (var i = 0; i < noteBtn.length; i++) {
		noteBtn[i].style.border="2px solid "+proggressList[index].paint;
	}
	setTimeout(()=>{
		$(".theTitle").removeClass("faid");
	},300);
}

