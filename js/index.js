
window.onload = function() {
    var heart=document.querySelectorAll(".heart")
    for (i=0;i<heart.length; i++) {
        heart[i].onclick = function() {
            
            if(this.src.includes("redheart.png")) {
                this.setAttribute('src','../Images/heart.png');
            }
            else {
                this.setAttribute('src','../Images/redheart.png');
            }
            
        }
    }
    var offerpage = document.getElementById("offer-page")
    var offerclose=document.getElementById("close-page")

    offerclose.onclick = function(){
        offerpage.style.display="none";
    }
var sidenav=document.getElementById("sidenav")
var menuicon=document.getElementById("menuicon")
var closenav=document.getElementById("closenav")

menuicon.addEventListener("click",function(){
    sidenav.style.right=0
}
)
closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
}
)
    
}
