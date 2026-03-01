let form = document.getElementById("contactForm");
let msgbox = document.getElementById("formMsg");

form.addEventListener("submit", function(e) {

  e.preventDefault(); 

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if(name === "" || email === "" || message === ""){
    msgbox.style.color = "red";
    msgbox.innerText = "Please fill form";
    return;
  }


  msgbox.style.color = "blue";
  msgbox.innerText = "Message sent successfully";

  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);


  form.reset();

});