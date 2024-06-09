
var navbar = document.getElementById("navbar");


var stickyNavPosition = navbar.offsetTop + (.5 * navbar.offsetHeight);


function stickyClassSettings(){
    if (window.scrollY >= stickyNavPosition){
        navbar.classList.add("sticky");
    }
    else{
        navbar.classList.remove("sticky");
    }
}

window.onscroll = function() {stickyClassSettings()};
window.onresize = function() {stickyClassSettings()};