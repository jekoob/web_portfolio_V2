document.getElementsByTagName("li")[3].style.backgroundColor="rgba(17, 17, 17, 0.5)"
function currentContent(anchoer){
    for(i=3;i<6;i++){
    document.getElementsByTagName("li")[i].style.backgroundColor="rgba(100, 100, 220, 0.5)";
    }
    document.getElementById(anchoer).style.backgroundColor="rgba(17, 17, 17, 0.5)";
}