
// desgin the vc's menu 

document.getElementsByTagName("li")[3].style.borderLeft="30px solid transparent";
document.getElementsByTagName("li")[3].style.fontStyle="italic";
function currentContent(anchoer){
    for(i=3;i<6;i++){
    document.getElementsByTagName("li")[i].style.backgroundColor="rgba(17,17,17, 0.5)";
    //document.getElementsByTagName("li")[i].style.color="#fffdef";
    document.getElementsByTagName("li")[i].style.borderLeft="0px solid transparent";
    document.getElementsByTagName("li")[i].style.fontStyle="normal";
   // document.getElementsByTagName("li")[i].style.textShadow="none";
    }

    document.getElementById(anchoer).style.borderBottom="30px solid rgba(100, 200, 300, 0.5)";
    document.getElementById(anchoer).style.borderLeft="30px solid transparent";
    document.getElementById(anchoer).style.fontStyle="italic";
    //document.getElementById(anchoer).style.textShadow="white 2px 2px 2px ";
}

let tableHeight=document.getElementsByClassName("tableContent")[0].offsetHeight;

let vcHeight=document.getElementsByClassName("vc")[0].offsetHeight;

let theHeight = window.outerHeight;
document.getElementsByTagName("body")[0].style.height=theHeight+"px";
let vcContent = theHeight-tableHeight;


// pull up the vc element to top .
function toggleUp(){
    
    document.getElementsByClassName("proImg")[0].style.opacity=0;
    document.getElementsByTagName("UL")[1].style.opacity=0;
    
    // header disappear countinuously 
   for(let i=0;i<tableHeight;i++){
        setTimeout(function(){ 
            document.getElementsByClassName("tableContent")[0].style.height=tableHeight-i+"px";
            if(i==1){
                document.getElementsByClassName("vc")[0].style.height=window.outerHeight-30+"px";
                document.getElementsByClassName("tableContent")[0].style.paddingTop="39px";
                document.getElementsByTagName("i")[0].style.transform="rotatex(180deg)";
                document.getElementsByTagName("i")[0].setAttribute("onclick","toggleDown()");
            }
       }, 200);
    }
    
}

function toggleDown(){
    document.getElementsByClassName("tableContent")[0].style.height=tableHeight+"px";
    document.getElementsByTagName("i")[0].style.transform="rotatex(360deg)";
    setTimeout(function(){
        document.getElementsByClassName("tableContent")[0].style.paddingTop="60px";
        document.getElementsByClassName("proImg")[0].style.opacity=1;
        document.getElementsByTagName("UL")[1].style.opacity=1;
        document.getElementsByTagName("i")[0].setAttribute("onclick","toggleUp()");
        document.getElementsByClassName("vc")[0].style.height=vcContent+"px";
    },300);

}


// VC's box  fitting its height to the device screen.
document.getElementsByClassName("vc")[0].style.height=vcContent+"px";
document.getElementsByClassName("tableContent")[0].style.height=tableHeight+"px";
