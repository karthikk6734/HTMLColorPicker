var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("bc");
var single = document.querySelector(".single");
function setcolorsingle(){
	body.style.background = single.value;
	document.querySelector("h3").textContent = "background : "+ single.value+";";
}
function setcolormultiple() {
	var s = "linear-gradient(to right," + color1.value +", "+color2.value+ ")"; 
	body.style.background = s;
	document.querySelector("h3").textContent = "linear-gradient(to right," + color1.value + "," + color2.value +");";
}
single.addEventListener("input",setcolorsingle);
color1.addEventListener("input",setcolormultiple);
color2.addEventListener("input",setcolormultiple);