window.onscroll = function(){stickyTop(),scrollFunction() };
var nav = document.getElementById("navbar");
var sticky = nav.offsetTop;
function stickyTop(){
    if(window.pageYOffset > sticky){
        nav.classList.add("fixed-top");
    }else{
        nav.classList.remove("fixed-top");
    }
}

topButton = document.getElementById("btn-top");

function scrollFunction(){
    if(document.documentElement.scrollTop > 20){
        topButton.style.display = "block";
    }else{
        topButton.style.display = "none";
    }
}

function topFunction(){
    document.documentElement.scrollTop = 0;
}
console.log();