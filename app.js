var body = document.getElementById("body");
var btn = document.getElementById("btn");

var btnBackgroundColor = "black";

var btnColor = "white";

var bodyBackgroundColor = "white";

btn.style.backgroundColor = btnBackgroundColor;
btn.style.color = btnColor;

btn.style.padding = "14px 15px";
btn.style.borderRadius = "14px";

function btnDarkLightMode() {
  console.log("Hello");
  body.classList.add("background");
  if (bodyBackgroundColor == "white") {
    bodyBackgroundColor = "black";
    body.style.backgroundColor = bodyBackgroundColor;
    btnColor = "black";
    btn.style.color = btnColor;
    btnBackgroundColor = "white";
    btn.style.backgroundColor = btnBackgroundColor;
    btn.innerHTML = "Day";
  } else {
    bodyBackgroundColor = "white";
    body.style.backgroundColor = bodyBackgroundColor;
    btnColor = "white";
    btn.style.color = btnColor;
    btnBackgroundColor = "black";
    btn.style.backgroundColor = btnBackgroundColor;
    btn.innerHTML = "Night";
  }
  console.log(bodyBackgroundColor);

  //   btn.style.backgroundColor = btnBackgroundColor = "black" ? "white" : "black";
  // btn.style.backgroundColor = btnBackgroundColor = "black" ? "white" : "black";

  // btn.style.color = btnColor = ("white"
  //   ? "black"
  //   : "white")
}
// var btn=document.getElementById.addEventListener('click',function btnDarkLightMode(){
//     var body=document.getElementById('body')
//     var btn=document.getElementById('btn')
//     body.classList.add('background');
// })
