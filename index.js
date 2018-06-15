var oLi = document.getElementsByTagName("li");
var oBox = document.getElementsByClassName("box");
for(var i=0;i<oLi.length;i++){
    oLi[i].onclick = function(){
        console.log("q");
        console.log(1);
        for(var i=0;i<oBox.length;i++){
            oBox[i].style.display="none";
        }
        oBox[this.index].style.display="block";
    }
}