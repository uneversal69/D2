let randombutton = document.querySelectorAll(".random");
let rColor = 1;
let gColor = 1;
let bColor = 1;
randombutton.addEventListener("click")
function(){
rColor =  Math.floor(Math.random() * 254) + 1;
gColor =  Math.floor(Math.random() * 254) + 1;
bColor =  Math.floor(Math.random() * 254) + 1;
body.style.backgroundColor = RGB(rColor,gColor,bColor);
document.body.style.backgroundColor = RGB(rColor,gColor,bColor);
}