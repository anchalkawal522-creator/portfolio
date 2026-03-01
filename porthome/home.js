let text = "Web Developer";
let i = 0;

function typeEffect() {

  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 150);
  }

}

typeEffect();