var light = document.getElementsByClassName("light")[0];
var buttonLight = document.getElementsByClassName("button")[0];

buttonLight.addEventListener("click",()=>{
    buttonLight.classList.toggle("active");
    light.classList.toggle("on");
})