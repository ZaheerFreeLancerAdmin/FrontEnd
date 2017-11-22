function Hello() {
   
  var uname = document.getElementById("uname").value;
  var pwd = document.getElementById("psw").value;
  if(uname == "admin" && pwd == "admin")
  window.location="welcome.html";
  else
  alert("user or pwd wrong");
}