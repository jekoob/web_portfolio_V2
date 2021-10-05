
document.getElementsByTagName("li")[3].style.borderBottom="30px solid rgba(100, 200, 300,1)";
document.getElementsByTagName("li")[3].style.borderLeft="30px solid transparent";
document.getElementsByTagName("li")[3].style.color="white";
function currentContent(anchoer){
    for(i=3;i<6;i++){
    document.getElementsByTagName("li")[i].style.backgroundColor="rgb(53, 124, 206)";
    document.getElementsByTagName("li")[i].style.color="black";
    document.getElementsByTagName("li")[i].style.borderBottom="0px solid rgb(100, 100, 220)";
    document.getElementsByTagName("li")[i].style.borderLeft="0px solid transparent";
    }
    //document.getElementById(anchoer).style.backgroundColor="rgba(17, 17, 17, 0.5)";
    document.getElementById(anchoer).style.borderBottom="30px solid rgba(100, 200, 300,1)";
    document.getElementById(anchoer).style.borderLeft="30px solid transparent"
    document.getElementById(anchoer).style.color="white";
}
let theHeight = window.outerHeight ;
theHeight=theHeight-document.getElementsByClassName("tableContent")[0].offsetHeight;
theHeight=theHeight+"px";
console.log(theHeight);
document.getElementsByClassName("vc")[0].style.height=theHeight;