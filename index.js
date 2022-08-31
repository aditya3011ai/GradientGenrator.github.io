var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var bg = document.querySelector("body");
var h3 = document.querySelector("h3");
var button = document.querySelector("button");
var css;
color1.addEventListener('input', ()=>{
    button.textContent = "Copy css";
    bg.style.backgroundImage="linear-gradient(to right,"+color1.value+","+color2.value+")";
    h3.textContent = color1.value + " , " + color2.value;
    css = "background-image: linear-gradient(to right," + h3.textContent + ");";
});
color2.addEventListener('input', () => {
    button.textContent = "Copy css";
    bg.style.backgroundImage="linear-gradient(to right,"+color1.value+","+color2.value+")" ;
    h3.textContent = color1.value +" , "+  color2.value;
    css = "background-image: linear-gradient(to right," + h3.textContent+");";
});

button.addEventListener('click',()=>{
    navigator.clipboard.writeText( css);
    button.textContent="Coppied!!";
})
