const width  = window.innerWidth || document.documentElement.clientWidth || 
document.body.clientWidth;
const height = window.innerHeight|| document.documentElement.clientHeight|| 
document.body.clientHeight;

if(width <= 750){
    var logo = document.getElementById("logo_dapit");
    logo.style.visibility = "hidden";
}

