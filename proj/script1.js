var username = localStorage.getItem("username");
  var dispElement = document.getElementById("disp");
  dispElement.textContent = "Welcome, " + username + "!";
  document.querySelector('#gojo').onclick=() =>{
    document.querySelector('.chatbot').classList.toggle('active')
}