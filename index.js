var oP = document.getElementById("options");
var oL = document.getElementById("list");
var oLi = oL.getElementsByTagName("li")
var oLi2 = oP.getElementsByTagName("li");
for(var i=0;i<oLi.length;i++){
    oLi[i].index = i;
    oLi[i].onclick=function(){
        for(var j=0;j<oLi2.length;j++){
            oLi[i].className="";
             oLi2[j].style.display="none";
        }
        oLi[this.index].className="active";
        oLi2[this.index].style.display='block'
    }
}